import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { companies } from '../data/companies'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BackgroundDecor from '../components/BackgroundDecor'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { seoMeta } from '../data/seo'
import { useLanguage } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

export default function Empresas() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const isEn = language === 'en'

  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/empresas']} pathname="/empresas" />
      <PageHero
        eyebrow={isEn ? 'Divisions' : 'Divisiones'}
        title={isEn ? 'Four divisions, one same quality standard.' : 'Cuatro divisiones, una misma exigencia de calidad.'}
        description={t.companies.subtitle}
      />

      {/* Companies Grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionHeading
              eyebrow={t.companies.eyebrow}
              tone="light"
              title={isEn ? 'Get to know each division of the group.' : 'Conoce cada división del grupo.'}
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {companies.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <article className="group relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-premium ring-1 ring-transparent transition-all duration-500 hover:-translate-y-1"
                  style={{ ['--accent' as string]: c.accent } as React.CSSProperties}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to top, ${c.accent}55, transparent)`,
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 h-1.5 w-full transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: c.accent }}
                  />

                  <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: c.accent }}
                    >
                      {c.short}
                    </span>
                    <h3 className="mt-2 text-2xl md:text-3xl font-medium text-white">
                      {((t.companies as unknown) as Record<string, { name: string }>)[c.id]?.name ?? c.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm md:text-base text-white/80 leading-relaxed">
                      {((t.companies as unknown) as Record<string, { description: string }>)[c.id]?.description ?? c.description}
                    </p>
                    <Link
                      to={`/empresas/${c.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 group-hover:text-[color:var(--accent)]"
                    >
                      {isEn ? 'Learn more' : 'Conocer más'}
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
