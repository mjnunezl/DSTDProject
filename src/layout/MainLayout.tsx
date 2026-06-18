import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import BackToTop from '../components/BackToTop'
import VirtualAssistant from '../components/assistant/VirtualAssistant'
import { whatsappMessages } from '../utils/whatsapp'

export default function MainLayout() {
  const { pathname } = useLocation()
  const overlayNav = pathname === '/' || /^\/empresas\/.+/.test(pathname)

  const message = pathname.includes('hormigones')
    ? whatsappMessages.hormigones
    : pathname.includes('industrias')
      ? whatsappMessages.industrias
    : pathname.includes('immobiliare')
      ? whatsappMessages.immobiliare
    : pathname.includes('agregados')
      ? whatsappMessages.agregados
    : whatsappMessages.general

  return (
    <>
      <div className={overlayNav ? 'absolute inset-x-0 top-0 z-50' : 'relative z-50'}>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" message={message} />
      <VirtualAssistant />
      <BackToTop />
    </>
  )
}
