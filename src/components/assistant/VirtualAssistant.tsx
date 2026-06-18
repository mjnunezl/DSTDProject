import { useState } from 'react'
import AssistantButton from './AssistantButton'
import AssistantWindow from './AssistantWindow'
import { useLanguage } from '../../context/LanguageContext'
import { getTranslation } from '../../i18n/translations'
import {
  getQuickQuestionResponse,
  type ChatMessage,
} from '../../data/assistantKnowledge'

export default function VirtualAssistant() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = getTranslation(language)
  const a = t.assistant

  const welcomeMsg: ChatMessage = {
    id: 'welcome',
    sender: 'assistant',
    text: a.welcome,
  }

  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMsg])

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleQuickQuestion = (question: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: question,
    }
    setMessages((prev) => [...prev, userMsg])

    setTimeout(() => {
      const response = getQuickQuestionResponse(question, language)
      setMessages((prev) => [...prev, response])
    }, 400)
  }

  return (
    <div className="fixed bottom-10 right-6 sm:bottom-6 z-[70] flex flex-col items-end gap-3">
      {/* Chat window */}
      <div
        className={[
          'transition-all duration-300 origin-bottom-right',
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none',
        ].join(' ')}
      >
        <AssistantWindow
          messages={messages}
          onQuickQuestion={handleQuickQuestion}
          language={language}
        />
      </div>

      {/* Toggle button */}
      <AssistantButton open={open} onClick={handleToggle} />
    </div>
  )
}
