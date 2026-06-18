import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import SEO from '../components/SEO'
import { useLanguage } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

export default function NotFound() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const n = t.notFound
  const isEn = language === 'en'

  return (
    <div className="bg-navy-deep min-h-screen flex flex-col items-center justify-center text-center px-6">
      <SEO
        title={isEn ? 'Page not found | DSTD Enterprises' : 'Página no encontrada | DSTD Enterprises'}
        description={n.description}
        pathname=""
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-navy-light/30 blur-3xl" />

      <div className="relative z-10">
        <div className="text-8xl md:text-9xl font-extralight text-white/10 leading-none tracking-tighter">
          404
        </div>
        <h1 className="mt-4 text-2xl md:text-3xl font-medium text-white leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
          {n.title}
        </h1>
        <p className="mt-4 text-base text-white/60 max-w-md mx-auto leading-relaxed">
          {n.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-champagne hover:text-white"
          >
            <Home size={18} />
            {n.backHome}
          </Link>
          <Link
            to="/empresas"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy"
          >
            {n.viewCompanies}
          </Link>
        </div>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-champagne"
        >
          <ArrowLeft size={16} />
          {isEn ? 'Go back' : 'Volver atrás'}
        </Link>
      </div>
    </div>
  )
}
