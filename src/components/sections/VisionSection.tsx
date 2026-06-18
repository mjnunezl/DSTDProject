import { ShieldCheck, TrendingUp, Gem, Lightbulb } from 'lucide-react'
import Reveal from '../Reveal'
import BackgroundDecor from '../BackgroundDecor'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

export default function VisionSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const v = t.vision

  const pillars = [
    { icon: ShieldCheck, title: v.pillars.trust.title, text: v.pillars.trust.text },
    { icon: TrendingUp, title: v.pillars.development.title, text: v.pillars.development.text },
    { icon: Gem, title: v.pillars.growth.title, text: v.pillars.growth.text },
    { icon: Lightbulb, title: v.pillars.integration.title, text: v.pillars.integration.text },
  ]

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Cinematic background */}
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
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">
              {v.eyebrow}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.1]"
            style={{ letterSpacing: '-0.03em' }}
          >
            {v.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
            {language === 'es'
              ? 'Trabajamos para construir una presencia empresarial sólida, conectando sectores que impulsan proyectos, oportunidades y crecimiento sostenible.'
              : 'We work to build a solid business presence, connecting sectors that drive projects, opportunities and sustainable growth.'}
          </p>
        </Reveal>

        {/* 2x2 card grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
              >
                {/* Accent line */}
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
                <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
