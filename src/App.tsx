import { Header } from './components/Header'
import { Interactions } from './components/Interaction'
import { useInput } from './hooks/useInput'
import { usePyodide } from './hooks/usePyodide'

const App = () => {
  const [inputText, handleInputChange, clearInput] = useInput('')
  const { isLoading, replInteractions, execute } = usePyodide({ execCallback: clearInput })

  if (isLoading) return <div>initializing...</div>

  return (
    <div>
      <Header />
      <div className="p:80|24|24">
        {replInteractions.map((interaction) => (
          <Interactions key={interaction.timestamp.toISOString()} content={interaction} />
        ))}
      </div>
      <textarea value={inputText} onChange={handleInputChange<HTMLTextAreaElement>} />
      <button type="button" onClick={() => execute(inputText)}>
        Execute
      </button>
    </div>
  )
}

export default App
