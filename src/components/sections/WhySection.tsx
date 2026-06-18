import { Network, Layers3, BadgeCheck, ClipboardCheck, LineChart } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import BackgroundDecor from '../BackgroundDecor'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

export default function WhySection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const w = t.why
  const isEn = language === 'en'

  const benefits = [
    {
      icon: Network,
      title: w.ecosystem.title,
      text: w.ecosystem.text,
    },
    {
      icon: Layers3,
      title: w.solutions.title,
      text: w.solutions.text,
    },
    {
      icon: BadgeCheck,
      title: isEn ? 'Solid corporate identity' : 'Identidad corporativa sólida',
      text: isEn ? 'A parent brand that backs every company in the group.' : 'Una marca madre que respalda cada empresa del grupo.',
    },
    {
      icon: ClipboardCheck,
      title: isEn ? 'Focus on quality and compliance' : 'Enfoque en calidad y cumplimiento',
      text: isEn ? 'Consistent standards and commitment to every delivery.' : 'Estándares consistentes y compromiso con cada entrega.',
    },
    {
      icon: LineChart,
      title: isEn ? 'Long-term growth vision' : 'Visión de crecimiento a largo plazo',
      text: isEn ? 'Decisions oriented to sustainable and lasting development.' : 'Decisiones orientadas a un desarrollo sostenible y duradero.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BackgroundDecor tone="light" dots={false} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={w.eyebrow}
                tone="light"
                title={w.title}
                description={w.subtitle}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 border-t border-navy/10">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 90}>
                <div className="group flex items-start gap-5 border-b border-navy/10 py-6 transition-colors duration-300">
                  <b.icon
                    size={24}
                    className="mt-0.5 shrink-0 text-champagne transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <h3 className="text-lg md:text-xl font-medium text-navy leading-snug">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base text-graphite/65 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
