import { useRef, useEffect } from 'react'
import AssistantMessage from './AssistantMessage'
import QuickQuestions from './QuickQuestions'
import type { ChatMessage } from '../../data/assistantKnowledge'

interface Props {
  messages: ChatMessage[]
  onQuickQuestion: (question: string) => void
}

export default function AssistantWindow({ messages, onQuickQuestion }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div
      className={[
        'flex flex-col',
        'w-[90vw] sm:w-[400px] max-h-[70vh] sm:max-h-[520px]',
        'rounded-3xl overflow-hidden',
        'bg-white/90 backdrop-blur-xl',
        'border border-white/40 shadow-premium-lg',
        'transition-all duration-300',
      ].join(' ')}
    >
      {/* Header */}
      <div className="shrink-0 bg-navy-deep px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne/20">
            <span className="text-sm text-champagne font-semibold">D</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white leading-none">Asistente DSTD</h3>
            <p className="mt-0.5 text-[11px] text-white/60">Estoy aquí para ayudarte</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-ivory/30">
        {messages.map((msg) => (
          <AssistantMessage key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Questions - always visible */}
      <div className="shrink-0 border-t border-navy/5 px-4 py-3 bg-white/60">
        <p className="mb-2 text-[11px] uppercase tracking-wider text-navy/40 font-medium">Preguntas rápidas</p>
        <QuickQuestions onSelect={onQuickQuestion} />
      </div>
    </div>
  )
}
