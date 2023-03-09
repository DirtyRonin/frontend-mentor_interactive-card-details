import React from 'react'
import { CardContext } from '../context/card-context'

export function useCardContext() {
  const context = React.useContext(CardContext)

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider')
  }

  return context
}
