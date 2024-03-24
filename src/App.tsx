import { useEffect } from 'react'
import { Header } from './components/Header'
import { Interactions } from './components/Interaction'
import { Loading } from './components/Loading'
import { TextArea } from './components/TextArea'
import { useHistorySelect } from './hooks/useHistorySelect'
import { useInput } from './hooks/useInput'
import { usePyodide } from './hooks/usePyodide'
import { isInputInteraction } from './types/ReplType'

const App = () => {
  const [inputText, handleInputChange, clearInput, setInput] = useInput('')
  const { isLoading, replInteractions, execute } = usePyodide({ execCallback: clearInput })
  const { handleKeyboard, resetHistoryIndex } = useHistorySelect(
    replInteractions.filter(isInputInteraction),
    setInput,
  )

  useEffect(() => {
    if (replInteractions.length === 0) return
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }
    scrollToBottom()
  }, [replInteractions.length])

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p:96|24|64">
          <div className="r:8 overflow:hidden">
            {replInteractions
              .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
              .map((interaction, index) => (
                <Interactions
                  key={interaction.timestamp.getTime()}
                  content={interaction}
                  showCopyButton={index !== 0}
                />
              ))}
          </div>
          <TextArea
            value={inputText}
            onChange={handleInputChange<HTMLTextAreaElement>}
            onSend={() => execute(inputText)}
            resetHistoryIndex={resetHistoryIndex}
            handleHistorySelect={handleKeyboard}
          />
        </div>
      )}
    </div>
  )
}

export default App
