import { IconArrowBadgeRightFilled } from '@tabler/icons-react'
import { type KeyboardEvent, useEffect, useRef } from 'react'

type TextAreaProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSend: () => void
}

export const TextArea = ({ value, onChange, onSend }: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      onSend()
    }
  }

  const updateHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    updateHeight()
  }, [updateHeight])

  return (
    <div className="p:8|16 mt:16 flex gap:4 r:12 outline:#0000|solid|2 outline:#58f5:has(textarea:focus-visible) ~outline-color|.2s|ease-in-out">
      <IconArrowBadgeRightFilled size={24} color="#47f" className="align-self:center" />
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          onChange(e)
          updateHeight()
        }}
        onKeyDown={handleKeyDown}
        className="flex:1|1 p:8 resize:none lh:20px outline:none f:mono {f:14;color:#2225}::placeholder"
        rows={1}
        placeholder='type code and press "Enter" to execute...'
        // biome-ignore lint/a11y/noAutofocus: This is a REPL, so it's expected to have autofocus
        autoFocus={true}
      />
    </div>
  )
}
