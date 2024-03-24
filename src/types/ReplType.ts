type InteractionType = 'info' | 'input' | 'output' | 'error' | 'standard-output' | 'standard-error'

export type ReplInteraction<Type extends InteractionType = InteractionType> = {
  type: Type
  text: string | undefined
  timestamp: Date
}

export const isInputInteraction = (
  interaction: ReplInteraction,
): interaction is ReplInteraction<'input'> => interaction.type === 'input'
