import { ArrowRight, Boxes, Layers, Hammer, Building2, Factory, Wrench, Warehouse, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BackgroundDecor from '../../components/BackgroundDecor'
import ContactForm from '../../components/ContactForm'
import WhatsAppButton from '../../components/WhatsAppButton'
import SEO from '../../components/SEO'
import { seoMeta } from '../../data/seo'
import { whatsappMessages } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'

const accent = '#7FC241'
const heroImg = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop'

export default function Industrias() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const ind = t.industrias
  const isEn = language === 'en'

  const catalog = [
    { name: 'Blocks', description: isEn ? 'High-strength concrete blocks in different sizes and finishes.' : 'Bloques de concreto de alta resistencia en distintas medidas y acabados.', img: '/img/productos/blocks.jpeg' },
    { name: 'Cemento', description: isEn ? 'Quality guaranteed Portland cement for structures and finishes.' : 'Cemento Portland de calidad garantizada para estructuras y acabados.', img: '/img/productos/cemento.jpg' },
    { name: isEn ? 'Rebar' : 'Varillas', description: isEn ? 'Corrugated steel for structural reinforcement according to technical specifications.' : 'Acero corrugado para refuerzo estructural según especificaciones técnicas.', img: '/img/productos/varillas.jpg' },
    { name: isEn ? 'H Beams' : 'Vigas H', description: isEn ? 'Structural steel beams for roofs, floors and large spans.' : 'Vigas de acero estructural para techos, entrepisos y grandes luces.', img: '/img/productos/vigas-h.jpg' },
    { name: 'Aluzinc', description: isEn ? 'Corrosion-resistant aluzinc sheets for roofs and enclosures.' : 'Láminas de aluzinc resistentes a la corrosión para techos y cerramientos.', img: '/img/productos/aluzinc.jpg' },
    { name: isEn ? 'Industrial materials' : 'Materiales industriales', description: isEn ? 'Various supplies for construction, civil works and special projects.' : 'Insumos diversos para construcción, obra civil y proyectos especiales.', img: '/img/productos/materiales-industriales.webp' },
  ]

  const sectors = [
    { icon: Building2, label: isEn ? 'Residential construction' : 'Construcción residencial' },
    { icon: Factory, label: isEn ? 'Industrial projects' : 'Proyectos industriales' },
    { icon: Warehouse, label: isEn ? 'Commercial works' : 'Obras comerciales' },
    { icon: Hammer, label: isEn ? 'Remodeling' : 'Remodelaciones' },
    { icon: Wrench, label: isEn ? 'Infrastructure' : 'Infraestructura' },
    { icon: PackageCheck, label: isEn ? 'Public works' : 'Obra pública' },
  ]

  const processSteps = [
    { step: '01', title: isEn ? 'Request' : 'Solicitud', text: isEn ? 'You tell us the products, quantities and delivery location.' : 'Nos indicas los productos, cantidades y lugar de entrega.' },
    { step: '02', title: isEn ? 'Quote' : 'Cotización', text: isEn ? 'We prepare a competitive proposal with clear delivery times.' : 'Elaboramos una propuesta competitiva con tiempos de entrega claros.' },
    { step: '03', title: isEn ? 'Confirmation' : 'Confirmación', text: isEn ? 'We adjust details and confirm the order for production or dispatch.' : 'Ajustamos detalles y confirmamos el pedido para producción o despacho.' },
    { step: '04', title: isEn ? 'Delivery' : 'Entrega', text: isEn ? 'We transport the materials punctually to your work site or warehouse.' : 'Transportamos los materiales puntualmente a tu obra o almacén.' },
  ]

  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/empresas/industrias']} pathname="/empresas/industrias" />

      {/* Hero — cinematic full-bleed */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <img src={heroImg} alt="DSTD Industrias" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(115deg, ${accent}33, transparent 50%)` }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 pt-20 sm:pt-28">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/80">{isEn ? 'Industries Division' : 'División Industrias'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
              {ind.heroTitle}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              {ind.heroDesc}
            </p>
            <div className="mt-8">
              <WhatsAppButton variant="inline" message={whatsappMessages.industrias} label={isEn ? 'Quote via WhatsApp' : 'Cotizar por WhatsApp'} />
            </div>
          </Reveal>
        </div>
        {/* Product strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-navy-deep/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 py-5">
              {['Blocks', 'Cemento', 'Varillas', 'Vigas H', 'Aluzinc'].map((m, i) => (
                <div key={m} className="flex items-center gap-8">
                  {i > 0 && <span className="hidden sm:block h-1 w-1 rounded-full bg-white/30" />}
                  <span className="text-sm font-medium uppercase tracking-wider text-white/85">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro — overlapping image with floating stat card */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-[24rem] shadow-premium-lg">
                  <img src="/img/industrias.jpg" alt="Almacén DSTD Industrias" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-2xl bg-white p-6 shadow-premium-lg max-w-[15rem]">
                  <Boxes size={28} style={{ color: accent }} strokeWidth={1.5} />
                  <div className="mt-3 text-2xl font-semibold text-navy">+50 {isEn ? 'products' : 'productos'}</div>
                  <div className="text-sm text-graphite/60">{isEn ? 'in permanent inventory' : 'en inventario permanente'}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'About the division' : 'Sobre la división'}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                {isEn ? 'Certified quality, guaranteed availability.' : 'Calidad certificada, disponibilidad garantizada.'}
              </h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">
                {isEn ? 'We offer a complete range of industrial materials with certified quality, from blocks and cement to rebar and H beams, all under a standard of excellence and continuous supply.' : 'Ofrecemos una gama completa de materiales industriales con calidad certificada, desde blocks y cemento hasta varillas y vigas H, todo bajo un estándar de excelencia y abastecimiento continuo.'}
              </p>
              <div className="mt-8 space-y-3">
                {[isEn ? 'Permanent stock for any scale' : 'Stock permanente para cualquier escala', isEn ? 'Specialized technical advice' : 'Asesoría técnica especializada', isEn ? 'Competitive volume pricing' : 'Precios competitivos por volumen'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    <span className="text-sm md:text-base text-navy">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catalog — image product grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'Catalog' : 'Catálogo'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                {isEn ? 'Our product line.' : 'Nuestra línea de productos.'}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 100}>
                <div className="group h-full overflow-hidden rounded-3xl bg-ivory shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-lg">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: accent }}>{p.name}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-graphite/65 leading-relaxed">{p.description}</p>
                    <Link to="/contacto" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: accent }}>
                      {isEn ? 'Quote' : 'Cotizar'}
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors — icon grid */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'Sectors served' : 'Sectores atendidos'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                {isEn ? 'Who do we serve?' : '¿A quién servimos?'}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) * 90}>
                <div className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:border-transparent hover:shadow-premium">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors" style={{ backgroundColor: `${accent}18` }}>
                    <s.icon size={22} style={{ color: accent }} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm md:text-base font-medium text-navy">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — vertical rail */}
      <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
        <BackgroundDecor tone="dark" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{isEn ? 'Quote process.' : 'Proceso de cotización.'}</h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">{isEn ? 'Simple, fast and transparent, from request to delivery.' : 'Simple, rápido y transparente, de la solicitud a la entrega.'}</p>
            </Reveal>
            <div className="lg:col-span-8">
              <div className="relative border-l border-white/15 pl-8 space-y-10">
                {processSteps.map((s, i) => (
                  <Reveal key={s.step} delay={i * 100}>
                    <div className="relative">
                      <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: accent }}>{s.step}</span>
                      <h3 className="text-xl font-medium text-white">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Form */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'Quote' : 'Cotización'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{ind.contactTitle}</h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">{isEn ? 'Fill out the form and receive a proposal tailored to your project.' : 'Completa el formulario y recibe una propuesta adaptada a tu proyecto.'}</p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-navy/10 bg-ivory p-5">
                <Layers size={24} style={{ color: accent }} strokeWidth={1.5} />
                <p className="text-sm text-graphite/70">{isEn ? 'Tell us quantities and delivery location for a more accurate proposal.' : 'Indícanos cantidades y lugar de entrega para una propuesta más precisa.'}</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8 shadow-premium">
                <ContactForm
                  fields={[
                    { name: 'name', label: isEn ? 'Name' : 'Nombre', required: true, placeholder: isEn ? 'Your name' : 'Tu nombre' },
                    { name: 'phone', label: isEn ? 'Phone' : 'Teléfono', required: true, placeholder: '829-367-2491' },
                    { name: 'product', label: isEn ? 'Product of interest' : 'Producto de interés', type: 'select', options: [
                      { value: '', label: isEn ? 'Select' : 'Selecciona' },
                      { value: 'blocks', label: 'Blocks' },
                      { value: 'cemento', label: isEn ? 'Cement' : 'Cemento' },
                      { value: 'varillas', label: isEn ? 'Rebar' : 'Varillas' },
                      { value: 'vigas', label: isEn ? 'H Beams' : 'Vigas H' },
                      { value: 'aluzinc', label: 'Aluzinc' },
                      { value: 'otros', label: isEn ? 'Other materials' : 'Otros materiales' },
                    ]},
                    { name: 'quantity', label: isEn ? 'Approximate quantity' : 'Cantidad aproximada', placeholder: isEn ? 'e.g. 500 blocks' : 'Ej. 500 blocks' },
                    { name: 'location', label: isEn ? 'Delivery location' : 'Ubicación de entrega', placeholder: isEn ? 'Address or city' : 'Dirección o ciudad' },
                    { name: 'message', label: isEn ? 'Additional message' : 'Mensaje adicional', type: 'textarea', placeholder: isEn ? 'Project details...' : 'Detalles del proyecto...' },
                  ]}
                  submitLabel={isEn ? 'Request quote' : 'Solicitar cotización'}
                  accentColor={accent}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 md:px-16 md:py-24 shadow-premium">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: accent }} />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{isEn ? 'Need materials for your project?' : '¿Necesitas materiales para tu obra?'}</h2>
                <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">{isEn ? 'Get a quote from us and receive a proposal tailored to your project.' : 'Cotiza con nosotros y recibe una propuesta adaptada a tu proyecto.'}</p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-[#7FC241] hover:text-white">
                    {isEn ? 'Request quote' : 'Solicitar cotización'}
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link to="/empresas" className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-navy">{isEn ? 'View other divisions' : 'Ver otras divisiones'}</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
