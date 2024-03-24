import { type ChangeEvent, type Dispatch, type SetStateAction, useState } from 'react'

type InputableElement = HTMLTextAreaElement | HTMLInputElement
type InputEventHandler = <TargetElement extends InputableElement = HTMLInputElement>(
  event: ChangeEvent<TargetElement>,
) => void

export const useInput = (
  defaultValue = '',
): [string, InputEventHandler, () => void, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(defaultValue)

  const handleChange: InputEventHandler = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return [value, handleChange, clear, setValue]
}
