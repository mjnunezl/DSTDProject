import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const isEn = language === 'en'

  const divisions = [
    { name: t.companies.hormigones.name, slug: 'hormigones', desc: t.companies.hormigones.description },
    { name: t.companies.industrias.name, slug: 'industrias', desc: t.companies.industrias.description },
    { name: t.companies.immobiliare.name, slug: 'immobiliare', desc: t.companies.immobiliare.description },
    { name: t.companies.agregados.name, slug: 'agregados', desc: t.companies.agregados.description },
  ]

  const stats = [
    { value: '4', label: isEn ? 'business divisions' : 'divisiones de negocio' },
    { value: '100%', label: isEn ? 'commitment & quality' : 'compromiso y calidad' },
    { value: '24/7', label: isEn ? 'customer support' : 'atención al cliente' },
  ]

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100dvh] overflow-hidden bg-black"
    >
      {/* Background Video (raw, no overlay) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-8 sm:pb-12 lg:pb-16 pt-24 sm:pt-0">
          <div className="lg:grid lg:grid-cols-12 lg:items-end gap-6 xl:gap-12">
            {/* Left Column — main content */}
            <div className="lg:col-span-7">
              <FadeIn delay={400} duration={900}>
                <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />
                  <span className="text-xs md:text-sm tracking-wide text-white/90">
                    {t.hero.tag}
                  </span>
                </div>
              </FadeIn>

              <AnimatedHeading
                text={t.hero.title}
                className="text-readable text-white text-[1.65rem] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-5 leading-[1.1]"
                charDelay={30}
                initialDelay={200}
                transitionDuration={500}
                style={{ letterSpacing: '-0.02em' }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-readable text-base md:text-lg text-white/85 mb-7 max-w-xl leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4 mb-9">
                  <Link
                    to="/nosotros"
                    className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-[#C8A45D] hover:text-white transition-colors duration-300"
                  >
                    {t.hero.primaryButton}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                  <Link
                    to="/empresas"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    {t.hero.secondaryButton}
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={1500} duration={1000}>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-readable">
                      <div className="text-2xl md:text-3xl font-semibold text-white">
                        {s.value}
                      </div>
                      <div className="text-xs md:text-sm text-white/70">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Column — divisions card */}
            <div className="lg:col-span-5 flex items-end justify-start lg:justify-end mt-6 sm:mt-8 lg:mt-0">
              <FadeIn delay={1400} duration={1000} className="w-full lg:max-w-sm">
                <div className="liquid-glass rounded-2xl p-4 sm:p-6 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {isEn ? 'Our divisions' : 'Nuestras divisiones'}
                    </span>
                    <span className="text-xs text-[#C8A45D]">04</span>
                  </div>
                  <ul className="divide-y divide-white/10">
                    {divisions.map((d) => (
                      <li
                        key={d.name}
                        className="group flex items-center justify-between py-3"
                      >
                        <Link
                          to={`/empresas/${d.slug}`}
                          className="flex-1"
                        >
                          <div className="text-base md:text-lg font-medium text-white">
                            {d.name}
                          </div>
                          <div className="text-xs text-white/60">{d.desc}</div>
                        </Link>
                        <ArrowRight
                          size={16}
                          className="text-white/40 transition-all duration-300 group-hover:text-[#C8A45D] group-hover:translate-x-0.5"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
