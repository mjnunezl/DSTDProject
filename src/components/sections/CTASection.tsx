import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import BackgroundDecor from '../BackgroundDecor'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

export default function CTASection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const c = t.cta
  const isEn = language === 'en'

  return (
    <section id="contacto" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BackgroundDecor tone="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 md:px-16 md:py-24 shadow-premium-lg">
            {/* Subtle accent glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-navy-light/40 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60">
                  {isEn ? 'Let\'s talk' : 'Hablemos'}
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.1]"
                style={{ letterSpacing: '-0.03em' }}
              >
                {c.title}
              </h2>
              <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
                {c.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-champagne hover:text-white"
                >
                  {c.button}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#empresas"
                  className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy"
                >
                  {c.explore}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
