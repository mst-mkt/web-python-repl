type InteractionType = 'input' | 'output' | 'error'

export type ReplInteraction<Type extends InteractionType = InteractionType> = {
  type: Type
  text: string | undefined
  timestamp: Date
}
