import { HardHat, Factory, Building, Mountain, Handshake, Briefcase } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import BackgroundDecor from '../BackgroundDecor'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

export default function ProjectsSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const isEn = language === 'en'

  const capabilities = [
    {
      icon: HardHat,
      title: isEn ? 'Construction works' : 'Obras y construcción',
      text: isEn ? 'Execution and support for construction projects of different scales.' : 'Ejecución y soporte para proyectos de construcción de distintas escalas.',
      span: 'md:col-span-2 lg:col-span-2',
    },
    {
      icon: Factory,
      title: isEn ? 'Industrial materials' : 'Materiales industriales',
      text: isEn ? 'Supply of blocks, rebar, cement, beams and more.' : 'Suministro de blocks, varillas, cemento, vigas y más.',
      span: '',
    },
    {
      icon: Building,
      title: isEn ? 'Real estate projects' : 'Proyectos inmobiliarios',
      text: isEn ? 'Development, investment and financing with a vision for the future.' : 'Desarrollo, inversión y financiamiento con visión a futuro.',
      span: 'md:col-span-2 lg:col-span-1',
    },
    {
      icon: Mountain,
      title: isEn ? 'Aggregate supply' : 'Suministro de agregados',
      text: isEn ? 'Sand, gravel and stone for works and projects.' : 'Arena, grava y piedra para obras y proyectos.',
      span: '',
    },
    {
      icon: Handshake,
      title: isEn ? 'Commercial alliances' : 'Alianzas comerciales',
      text: isEn ? 'Strategic collaborations that multiply the group\'s reach.' : 'Colaboraciones estratégicas que multiplican el alcance del grupo.',
      span: 'md:col-span-2 lg:col-span-2',
    },
    {
      icon: Briefcase,
      title: isEn ? 'Corporate development' : 'Desarrollo corporativo',
      text: isEn ? 'Solid business structure oriented to sustainable growth.' : 'Estructura empresarial sólida orientada al crecimiento sostenible.',
      span: '',
    },
  ]

  return (
    <section id="proyectos" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BackgroundDecor tone="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            tone="light"
            title={t.projects.title}
            description={t.projects.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 100}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl glass-card p-8 md:p-10 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(11,31,58,0.18)] ${c.span}`}
              >
                {/* Top accent line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-champagne/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                    <c.icon size={24} className="text-champagne" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-extralight tabular-nums text-navy/15 transition-colors duration-300 group-hover:text-champagne/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-xl md:text-2xl font-medium text-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-graphite/65 leading-relaxed">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
