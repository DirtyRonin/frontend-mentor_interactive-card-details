export const fields = [
  'name',
  'cardNumber',
  'expirationMonth',
  'expirationYear',
  'cvc'
] as const

export type StateKey = typeof fields[number]
