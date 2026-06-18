interface Props {
  onSelect: (question: string) => void
  questions: readonly string[]
}

export default function QuickQuestions({ onSelect, questions }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="rounded-full border border-navy/8 bg-navy-deep/[0.03] px-3.5 py-1.5 text-xs text-navy transition-all duration-200 hover:border-champagne/40 hover:bg-champagne/10 hover:text-navy-deep"
        >
          {q}
        </button>
      ))}
    </div>
  )
}
