import React from 'react'
import { State } from '../hooks/use-card-state'

export const CardContext = React.createContext<
  | {
      state: State
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
      onCardNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }
  | undefined
>(undefined)
