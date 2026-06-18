import { ArrowRight, Mountain, Layers, Truck, ShieldCheck, Droplets, Hammer, Construction, Waves } from 'lucide-react'
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

const accent = '#8B6B43'
const heroImg = '/img/agregados.jpg'

export default function Agregados() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const a = t.agregados
  const isEn = language === 'en'

  const catalog = [
    { name: isEn ? 'Sand' : 'Arena', description: isEn ? 'Fine and coarse sand for construction, finishes and all types of civil works.' : 'Arena fina y gruesa para construcción, acabados y obras civiles de todo tipo.', img: '/img/productos/arena.jpg', tall: true },
    { name: isEn ? 'Gravel' : 'Grava', description: isEn ? 'Gravel of different sizes for bases, asphalt, concrete and filters.' : 'Grava de distintos tamaños para bases, asfaltos, concretos y filtros.', img: '/img/productos/grava.webp', tall: false },
    { name: isEn ? 'Stone' : 'Piedra', description: isEn ? 'Crushed stone, river stone and material for masonry and gabions.' : 'Piedra picada, canto rodado y material para mampostería y gaviones.', img: '/img/productos/piedra.webp', tall: false },
    { name: isEn ? 'Mixed aggregates' : 'Agregados mixtos', description: isEn ? 'Specific blends according to your project technical specifications.' : 'Mezclas específicas según las especificaciones técnicas de tu proyecto.', img: '/img/productos/agregados-mixtos.jpg', tall: false },
    { name: isEn ? 'Selected material' : 'Material selecto', description: isEn ? 'Processed and classified material for special uses and finishes.' : 'Material procesado y clasificado para usos especiales y acabados.', img: '/img/productos/material-selecto.jpg', tall: true },
    { name: isEn ? 'Work supply' : 'Suministro para obras', description: isEn ? 'Continuous supply for projects of any scale.' : 'Abastecimiento continuo para proyectos de cualquier escala.', img: '/img/productos/suministro-para-obras.jpg', tall: false },
  ]

  const uses = [
    { icon: Layers, label: isEn ? 'Concrete and mortars' : 'Concreto y morteros' },
    { icon: Construction, label: isEn ? 'Bases and sub-bases' : 'Bases y sub-bases' },
    { icon: Hammer, label: 'Asfalto' },
    { icon: Mountain, label: isEn ? 'Masonry' : 'Mampostería' },
    { icon: Droplets, label: isEn ? 'Drainage and filters' : 'Drenaje y filtros' },
    { icon: Waves, label: isEn ? 'Fills and embankments' : 'Rellenos y terraplén' },
  ]

  const processSteps = [
    { step: '01', title: isEn ? 'Request' : 'Solicitud', text: isEn ? 'You tell us the material, quantity and delivery location.' : 'Nos indicas el material, cantidad y lugar de entrega.' },
    { step: '02', title: isEn ? 'Quote' : 'Cotización', text: isEn ? 'We prepare a proposal with price and delivery time.' : 'Preparamos una propuesta con precio y tiempo de entrega.' },
    { step: '03', title: isEn ? 'Confirmation' : 'Confirmación', text: isEn ? 'We adjust details and confirm the order and logistics.' : 'Ajustamos detalles y confirmamos el pedido y la logística.' },
    { step: '04', title: isEn ? 'Delivery' : 'Entrega', text: isEn ? 'We transport the aggregates punctually to your work site.' : 'Transportamos los agregados puntualmente a tu obra.' },
  ]

  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/empresas/agregados']} pathname="/empresas/agregados" />

      {/* Hero — warm earthy full-bleed */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-end">
        <img src={heroImg} alt="DSTD Agregados" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(43,33,22,0.95), rgba(43,33,22,0.55) 45%, rgba(43,33,22,0.25))' }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 pb-16 sm:pb-20 md:pb-24 pt-28 sm:pt-40">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#d4b483' }} />
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/80">{isEn ? 'Aggregates Division' : 'División Agregados'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.05] max-w-4xl" style={{ letterSpacing: '-0.02em' }}>
              {a.heroTitle}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              {a.heroDesc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Material strip */}
      <section className="relative z-20" style={{ backgroundColor: accent }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-white/90">
            {[isEn ? 'Sand' : 'Arena', isEn ? 'Gravel' : 'Grava', isEn ? 'Stone' : 'Piedra', isEn ? 'Selected material' : 'Material selecto', isEn ? 'Mixed aggregates' : 'Agregados mixtos'].map((m) => (
              <span key={m} className="text-sm md:text-base font-medium uppercase tracking-wider">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — text + image with stat */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'About the division' : 'Sobre la división'}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                {isEn ? 'Processed material, guaranteed quality.' : 'Material procesado, calidad garantizada.'}
              </h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">
                {isEn ? 'We provide selected and processed aggregates with quality control, guaranteeing that each material meets the technical specifications required on site.' : 'Proveemos agregados seleccionados y procesados con control de calidad, garantizando que cada material cumpla con las especificaciones técnicas requeridas en obra.'}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{ icon: ShieldCheck, t: isEn ? 'Certified quality' : 'Calidad certificada' }, { icon: Truck, t: isEn ? 'Own logistics' : 'Logística propia' }, { icon: Layers, t: isEn ? 'Volume at scale' : 'Volumen a escala' }].map((f) => (
                  <div key={f.t} className="rounded-2xl border border-navy/10 bg-white p-4 text-center">
                    <f.icon size={22} className="mx-auto" style={{ color: accent }} strokeWidth={1.5} />
                    <div className="mt-2 text-xs font-medium text-navy leading-tight">{f.t}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative rounded-3xl overflow-hidden h-[26rem] shadow-premium-lg">
                <img src="/img/productos/grava.webp" alt="Cantera DSTD Agregados" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-4 backdrop-blur">
                  <div className="text-3xl font-semibold" style={{ color: accent }}>+10k m³</div>
                  <div className="text-xs text-graphite/60">{isEn ? 'supplied per year' : 'suministrados al año'}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catalog — masonry image grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <BackgroundDecor tone="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'Catalog' : 'Catálogo'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{isEn ? 'Our materials.' : 'Nuestros materiales.'}</h2>
            </div>
          </Reveal>
          <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {catalog.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 90}>
                <div className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl shadow-premium">
                  <img src={p.img} alt={p.name} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.tall ? 'h-96' : 'h-64'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b2116]/90 via-[#2b2116]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-xl font-medium text-white">{p.name}</h3>
                    <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{p.description}</p>
                    <Link to="/contacto" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                      {isEn ? 'Quote' : 'Cotizar'}
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Uses — icon band */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <BackgroundDecor tone="light" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="text-xs uppercase tracking-[0.2em] text-navy/50">{isEn ? 'Construction uses' : 'Usos en construcción'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{isEn ? 'Where are they used?' : '¿Dónde se utilizan?'}</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {uses.map((u, i) => (
              <Reveal key={u.label} delay={(i % 6) * 70}>
                <div className="group flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl transition-colors" style={{ backgroundColor: `${accent}18` }}>
                    <u.icon size={24} style={{ color: accent }} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium text-navy leading-tight">{u.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — diagonal stepped cards */}
      <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
        <BackgroundDecor tone="dark" dots={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{isEn ? 'Order process.' : 'Proceso de pedido.'}</h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">{isEn ? 'Simple, fast and hassle-free.' : 'Simple, rápido y sin complicaciones.'}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className={`relative h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: accent }}>{s.step}</span>
                  <h3 className="mt-4 text-xl font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
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
              <h2 className="text-3xl md:text-4xl font-normal text-navy leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{a.contactTitle}</h2>
              <p className="mt-5 text-base md:text-lg text-graphite/65 leading-relaxed">{isEn ? 'Fill out the form and receive a proposal tailored to your project.' : 'Completa el formulario y recibe una propuesta adaptada a tu obra.'}</p>
              <div className="mt-8">
                <WhatsAppButton variant="inline" message={whatsappMessages.agregados} label={isEn ? 'Quote via WhatsApp' : 'Cotizar por WhatsApp'} />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl glass-card p-8 shadow-premium">
                <ContactForm
                  fields={[
                    { name: 'name', label: isEn ? 'Name' : 'Nombre', required: true, placeholder: isEn ? 'Your name' : 'Tu nombre' },
                    { name: 'phone', label: isEn ? 'Phone' : 'Teléfono', required: true, placeholder: '829-367-2491' },
                    { name: 'material', label: isEn ? 'Material of interest' : 'Material de interés', type: 'select', options: [
                      { value: '', label: isEn ? 'Select' : 'Selecciona' },
                      { value: 'arena', label: isEn ? 'Sand' : 'Arena' },
                      { value: 'grava', label: isEn ? 'Gravel' : 'Grava' },
                      { value: 'piedra', label: isEn ? 'Stone' : 'Piedra' },
                      { value: 'mixto', label: isEn ? 'Mixed aggregate' : 'Agregado mixto' },
                      { value: 'otro', label: isEn ? 'Other' : 'Otro' },
                    ]},
                    { name: 'quantity', label: isEn ? 'Approximate quantity' : 'Cantidad aproximada', placeholder: isEn ? 'e.g. 30 m³' : 'Ej. 30 m³' },
                    { name: 'location', label: isEn ? 'Delivery location' : 'Ubicación de entrega', placeholder: isEn ? 'Address or city' : 'Dirección o ciudad' },
                    { name: 'date', label: isEn ? 'Desired date' : 'Fecha deseada', type: 'date' },
                    { name: 'message', label: isEn ? 'Additional message' : 'Mensaje adicional', type: 'textarea', placeholder: isEn ? 'Special details about your project...' : 'Detalles especiales de tu obra...' },
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
                <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>{isEn ? 'Need aggregates for your project?' : '¿Necesitas agregados para tu proyecto?'}</h2>
                <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">{isEn ? 'Get a quote from us and receive a proposal tailored to your project requirements.' : 'Cotiza con nosotros y recibe una propuesta adaptada a los requerimientos de tu obra.'}</p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-navy transition-colors duration-300 hover:bg-[#8B6B43] hover:text-white">
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
