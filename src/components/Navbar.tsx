import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

function makeLinkClass(overlay: boolean) {
  return function linkClass({ isActive }: { isActive: boolean }) {
    const base = 'text-sm transition-colors duration-300'
    if (overlay) {
      return [
        base,
        isActive
          ? 'text-[#C8A45D] font-medium'
          : 'text-white/90 hover:text-[#C8A45D]',
      ].join(' ')
    }
    return [
      base,
      isActive
        ? 'text-[#C8A45D] font-medium'
        : 'text-navy/90 hover:text-[#C8A45D]',
    ].join(' ')
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const overlay = pathname === '/' || /^\/empresas\/.+/.test(pathname)
  const { language, toggleLanguage } = useLanguage()
  const t = getTranslation(language)

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.companies, to: '/empresas' },
    { label: t.nav.projects, to: '/proyectos' },
    { label: t.nav.about, to: '/nosotros' },
    { label: t.nav.contact, to: '/contacto' },
  ]

  const langBtnClass = overlay
    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30'
    : 'bg-navy-deep/5 border-navy/10 text-navy hover:bg-navy-deep/10 hover:border-navy/20'

  return (
    <nav className={`px-6 md:px-12 lg:px-16 py-4 relative z-50 ${overlay ? '' : 'bg-navy-deep'}`}>
      <div className={`max-w-7xl mx-auto rounded-xl px-4 py-2 flex items-center justify-between ${overlay ? 'liquid-glass' : 'bg-ivory border border-navy/10'}`}>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C8A45D]" />
            <span className={`font-gothic text-2xl leading-none translate-y-[2px] ${overlay ? 'text-white' : 'text-navy'}`}>
              DSTD
            </span>
            <span className={`text-sm font-medium uppercase tracking-widest leading-none ${overlay ? 'text-white/70' : 'text-navy/70'}`}>
              Enterprises
            </span>
          </Link>
          {/* Curved divider */}
          <svg
            width="18"
            height="40"
            viewBox="0 0 18 40"
            fill="none"
            className={overlay ? 'text-white/30' : 'text-navy/25'}
            aria-hidden="true"
          >
            <path
              d="M4 2 Q15 20 4 38"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={makeLinkClass(overlay)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right CTA + Language */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider border backdrop-blur-sm transition-all duration-300 ${langBtnClass}`}
            aria-label="Change language"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            to="/contacto"
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${overlay ? 'bg-white text-black hover:bg-[#C8A45D] hover:text-white' : 'bg-navy text-white hover:bg-[#C8A45D]'}`}
          >
            {t.nav.contactButton}
          </Link>
        </div>

        {/* Mobile: Language + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider border backdrop-blur-sm transition-all duration-300 ${langBtnClass}`}
            aria-label="Change language"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            className={overlay ? 'text-white' : 'text-navy'}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden mt-2 max-w-7xl mx-auto rounded-xl px-4 py-4 flex flex-col gap-3 ${overlay ? 'liquid-glass' : 'bg-ivory border border-navy/10'}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                [
                  'text-sm transition-colors duration-300',
                  isActive
                    ? 'text-[#C8A45D] font-medium'
                    : overlay ? 'text-white/90 hover:text-[#C8A45D]' : 'text-navy/90 hover:text-[#C8A45D]',
                ].join(' ')
              }
              onClick={() => setMobileOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 text-center mt-1 ${overlay ? 'bg-white text-black hover:bg-[#C8A45D] hover:text-white' : 'bg-navy text-white hover:bg-[#C8A45D]'}`}
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.contactButton}
          </Link>
          <button
            onClick={() => { toggleLanguage(); setMobileOpen(false) }}
            className={`mt-2 py-2 rounded-lg text-xs font-semibold tracking-wider border backdrop-blur-sm transition-all duration-300 text-center ${langBtnClass}`}
          >
            {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </div>
      )}
    </nav>
  )
}
