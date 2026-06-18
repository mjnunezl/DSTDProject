import { ShieldCheck, TrendingUp, Gem, Lightbulb, Building2, Globe, Factory, Mountain } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BackgroundDecor from '../components/BackgroundDecor'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { seoMeta } from '../data/seo'
import { useLanguage } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

export default function Nosotros() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const a = t.about
  const isEn = language === 'en'

  const pillars = [
    { icon: ShieldCheck, title: a.pillars.trust.title, text: a.pillars.trust.text },
    { icon: TrendingUp, title: a.pillars.development.title, text: a.pillars.development.text },
    { icon: Gem, title: a.pillars.quality.title, text: a.pillars.quality.text },
    { icon: Lightbulb, title: a.pillars.innovation.title, text: a.pillars.innovation.text },
  ]

  const sectors = [
    { icon: Building2, label: a.sectorLabels[0] },
    { icon: Factory, label: a.sectorLabels[1] },
    { icon: Globe, label: a.sectorLabels[2] },
    { icon: Mountain, label: a.sectorLabels[3] },
  ]

  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/nosotros']} pathname="/nosotros" />
      <PageHero
        eyebrow={a.eyebrow}
        title={a.title}
        description={a.description}
      />

      {/* Quiénes somos */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <SectionHeading
                eyebrow={a.whoWeAre}
                tone="light"
                title={a.whoTitle}
                description={a.whoDesc}
              />
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {[
                  { label: isEn ? '4 business divisions' : '4 divisiones de negocio', value: isEn ? 'Integrated structure' : 'Estructura integrada' },
                  { label: isEn ? 'Development focus' : 'Enfoque en desarrollo', value: isEn ? 'Long-term vision' : 'Visión a largo plazo' },
                  { label: isEn ? 'Solutions for projects' : 'Soluciones para proyectos', value: isEn ? 'From start to finish' : 'De principio a fin' },
                  { label: isEn ? 'Corporate presence' : 'Presencia corporativa', value: isEn ? 'Comprehensive & solid' : 'Integral y sólida' },
                ].map((d) => (
                  <div key={d.label} className="group relative overflow-hidden rounded-2xl glass-card p-6 md:p-7 shadow-premium transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="text-sm md:text-base font-medium text-navy leading-snug">{d.label}</div>
                    <div className="mt-1 text-xs md:text-sm text-graphite/60">{d.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visión / Misión / Valores */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep/90" />
        <BackgroundDecor tone="dark" dots={false} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">
                  {a.philosophy}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                {a.philTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                  <div className="absolute left-0 top-0 h-1 w-2/3 bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                      <p.icon size={24} className="text-champagne" strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-extralight tabular-nums text-white/20 transition-colors duration-300 group-hover:text-champagne/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl md:text-3xl font-medium text-white">{p.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="relative overflow-hidden bg-[#EDE9E2] py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionHeading
              eyebrow={a.sectors}
              tone="light"
              title={a.sectorsTitle}
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="group flex flex-col items-center text-center p-8 rounded-3xl glass-card shadow-premium transition-all duration-500 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                    <s.icon size={28} className="text-champagne" strokeWidth={1.5} />
                  </div>
                  <span className="mt-5 text-lg font-medium text-navy">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
