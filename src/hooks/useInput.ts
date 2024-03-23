import { useState, type ChangeEvent } from 'react'

type InputableElement = HTMLTextAreaElement | HTMLInputElement
type InputEventHandler = <TargetElement extends InputableElement = HTMLInputElement>(
  event: ChangeEvent<TargetElement>,
) => void

export const useInput = (defaultValue = ''): [string, InputEventHandler, () => void] => {
  const [value, setValue] = useState(defaultValue)

  const handleChange: InputEventHandler = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return [value, handleChange, clear]
}
