import { useEffect } from 'react'
import { Header } from './components/Header'
import { Interactions } from './components/Interaction'
import { Loading } from './components/Loading'
import { TextArea } from './components/TextArea'
import { useInput } from './hooks/useInput'
import { usePyodide } from './hooks/usePyodide'

const App = () => {
  const [inputText, handleInputChange, clearInput] = useInput('')
  const { isLoading, replInteractions, execute } = usePyodide({ execCallback: clearInput })

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
              .map((interaction) => (
                <Interactions key={interaction.timestamp.getTime()} content={interaction} />
              ))}
          </div>
          <TextArea
            value={inputText}
            onChange={handleInputChange<HTMLTextAreaElement>}
            onSend={() => execute(inputText)}
          />
        </div>
      )}
    </div>
  )
}

export default App
