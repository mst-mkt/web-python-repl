import { type Dispatch, type KeyboardEvent, type SetStateAction, useState } from 'react'
import type { ReplInteraction } from '../types/ReplType'

export const useHistorySelect = (
  history: ReplInteraction<'input'>[],
  setInput: Dispatch<SetStateAction<string>>,
) => {
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)

  const resetHistoryIndex = () => setHistoryIndex(null)

  const handleKeyboard = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (history.length === 0) return

    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault()
      const currentIndex = historyIndex ?? history.length
      const nextIndex = event.key === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1
      const nextHistory = history[nextIndex]

      if (nextHistory !== undefined) {
        setInput(nextHistory.text ?? '')
        setHistoryIndex(nextIndex)
        return
      }

      if (event.key === 'ArrowDown') {
        setInput('')
        resetHistoryIndex()
      }
    }
  }

  return { handleKeyboard, resetHistoryIndex }
}
