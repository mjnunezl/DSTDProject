import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      setVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    } catch {
      window.scrollTo(0, 0)
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    const root = document.getElementById('root')
    if (root) {
      root.scrollTop = 0
    }

    const main = document.querySelector('main')
    if (main) {
      main.scrollTop = 0
    }
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={[
        'fixed bottom-[8.5rem] right-6 sm:bottom-[6.5rem] z-[80]',
        'flex h-11 w-11 items-center justify-center rounded-full',
        'bg-navy text-white shadow-lg',
        'transition-all duration-300',
        'hover:bg-champagne hover:scale-110',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  )
}
