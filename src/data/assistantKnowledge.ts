import type { Language } from '../context/LanguageContext'
import { getTranslation } from '../i18n/translations'

export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant'
  text: string
  actions?: ActionButton[]
}

export interface ActionButton {
  label: string
  type: 'link' | 'whatsapp' | 'text'
  href?: string
  message?: string
}

function makeWhatsAppAction(label: string, message: string): ActionButton {
  return {
    label,
    type: 'whatsapp',
    message,
  }
}

function makeLinkAction(label: string, href: string): ActionButton {
  return {
    label,
    type: 'link',
    href,
  }
}

export function getResponse(userText: string, language: Language = 'es'): ChatMessage {
  const t = getTranslation(language)
  const r = t.assistant.responses
  const a = t.assistant.actions
  const txt = userText.toLowerCase()
  const isEn = language === 'en'

  // DSTD Enterprises general
  if (/dstd|empresa|empresarial|grupo|holding|qué es|quiénes son|what is|about dstd/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.dstd,
      actions: [
        makeLinkAction(a.viewCompanies, '/empresas'),
        makeLinkAction(a.contact, '/contacto'),
      ],
    }
  }

  // Hormigones / concreto
  if (/hormigón|hormigon|concreto|vaciado|zapata|columna|losa|mezcla|psi|batch|concrete|cement|pour/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.hormigones,
      actions: [
        makeLinkAction(a.viewHormigones, '/empresas/hormigones'),
        makeWhatsAppAction(a.whatsapp, isEn ? 'Hello, I am interested in quoting concrete for a project.' : 'Hola, estoy interesado en cotizar hormigón para una obra.'),
      ],
    }
  }

  // Industrias / materiales
  if (/block|cemento|varilla|viga|material|industrial|construcción|aluzinc|blocks|rebar|beam/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.industrias,
      actions: [
        makeLinkAction(a.viewIndustrias, '/empresas/industrias'),
        makeWhatsAppAction(a.whatsapp, isEn ? 'Hello, I am interested in quoting industrial materials with DSTD Industries.' : 'Hola, estoy interesado en cotizar materiales industriales con DSTD Industrias.'),
      ],
    }
  }

  // Immobiliare / propiedades
  if (/propiedad|casa|apartamento|solar|préstamo|prestamo|financiamiento|inversión|inversion|inmobiliario|bienes raíces|property|house|apartment|loan|investment|real estate/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.immobiliare,
      actions: [
        makeLinkAction(a.viewImmobiliare, '/empresas/immobiliare'),
        makeWhatsAppAction(isEn ? 'Schedule consultation via WhatsApp' : 'Agendar asesoría por WhatsApp', isEn ? 'Hello, I am interested in properties, projects or loans with DSTD Immobiliare.' : 'Hola, estoy interesado en propiedades, proyectos o préstamos con DSTD Immobiliare.'),
      ],
    }
  }

  // Agregados
  if (/arena|grava|piedra|agregado|material selecto|árido|arido|suministro|sand|gravel|stone|aggregate/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.agregados,
      actions: [
        makeLinkAction(a.viewAgregados, '/empresas/agregados'),
        makeWhatsAppAction(a.whatsapp, isEn ? 'Hello, I am interested in quoting aggregates such as sand, gravel or stone.' : 'Hola, estoy interesado en cotizar agregados como arena, grava o piedra.'),
      ],
    }
  }

  // Contacto
  if (/contacto|teléfono|telefono|email|correo|ubicación|ubican|escribir|hablar|contact|phone|email|location/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.contact,
      actions: [
        makeLinkAction(a.contact, '/contacto'),
        makeWhatsAppAction(isEn ? 'Write us on WhatsApp' : 'Escríbenos por WhatsApp', isEn ? 'Hello, I would like to receive information about DSTD Enterprises.' : 'Hola, me gustaría recibir información sobre DSTD Enterprises.'),
      ],
    }
  }

  // Cotizar genérico
  if (/cotizar|cotización|cotizacion|precio|costo|cuánto|cunto|quote|price|cost/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.fallback,
      actions: [
        makeLinkAction(a.viewCompanies, '/empresas'),
        makeWhatsAppAction(a.whatsapp, isEn ? 'Hello, I would like to receive a quote from DSTD Enterprises.' : 'Hola, me gustaría recibir una cotización de DSTD Enterprises.'),
      ],
    }
  }

  // Proyectos
  if (/proyecto|obra|desarrollo|construir|edificar|project|work|development|build/.test(txt)) {
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: r.fallback,
      actions: [
        makeLinkAction(a.viewCompanies, '/empresas'),
        makeLinkAction(isEn ? 'View projects' : 'Ver proyectos', '/proyectos'),
      ],
    }
  }

  // Fallback
  return {
    id: Date.now().toString(),
    sender: 'assistant',
    text: r.fallback,
    actions: [
      makeLinkAction(a.viewCompanies, '/empresas'),
      makeLinkAction(a.contact, '/contacto'),
    ],
  }
}

export function getQuickQuestionResponse(question: string, language: Language = 'es'): ChatMessage {
  const q = question.toLowerCase()

  if (q.includes('qué es') || q.includes('what is')) {
    return getResponse('dstd enterprises', language)
  }
  if (q.includes('hormigón') || q.includes('concrete')) {
    return getResponse('cotizar hormigón', language)
  }
  if (q.includes('materiales') || q.includes('materials')) {
    return getResponse('materiales de construcción', language)
  }
  if (q.includes('propiedades') || q.includes('préstamos') || q.includes('properties') || q.includes('loans')) {
    return getResponse('propiedades', language)
  }
  if (q.includes('arena') || q.includes('grava') || q.includes('sand') || q.includes('gravel')) {
    return getResponse('agregados', language)
  }
  if (q.includes('contactar') || q.includes('contact')) {
    return getResponse('contacto', language)
  }

  return getResponse(question, language)
}
