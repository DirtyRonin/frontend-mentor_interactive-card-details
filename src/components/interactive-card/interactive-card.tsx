import { InteractiveCardForm } from '.'
import { CardContext } from '../../context/card-context'
import { UseCardState } from '../../hooks/use-card-state'

export function InteractiveCard() {
  const { state, onCardNumberChange, onChange, onClick } = UseCardState()

  return (
    <CardContext.Provider
      value={{
        state,
        onCardNumberChange,
        onChange,
        onClick
      }}>
      <InteractiveCardForm />
    </CardContext.Provider>
  )
}
