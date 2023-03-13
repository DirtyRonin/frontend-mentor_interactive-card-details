import React from 'react'
import { fields, StateKey } from '../components/models/state-key'
import { ValidationField } from '../components/models/validation-field'
import { trimFullString } from '../utils/stringHelper'

export interface State {
  name: ValidationField
  cardNumber: ValidationField
  expirationMonth: ValidationField
  expirationYear: ValidationField
  cvc: ValidationField
  isStateValid: boolean
}

export function UseCardState() {
  const [state, dispatch] = React.useState<State>({
    name: { name: 'name', isValid: true, error: '', value: '' },
    cardNumber: { name: 'cardNumber', isValid: true, error: '', value: '' },
    expirationMonth: {
      name: 'expirationMonth',
      isValid: true,
      error: '',
      value: ''
    },
    expirationYear: {
      name: 'expirationYear',
      isValid: true,
      error: '',
      value: ''
    },
    cvc: { name: 'cvc', isValid: true, error: '', value: '' },
    isStateValid: false
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    dispatch((prevState) => ({
      ...prevState,
      [event.target.id]: {
        ...prevState[event.target.id as StateKey],
        value: event.target.value
      }
    }))
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    validateName()
    validateCardNumber()
    validateExpirationMonth()
    validateExpirationYear()
    validateCvc()

    dispatch((prevState) => ({
      ...prevState,
      // prevState.name.isValid &&
      // prevState.cardNumber.isValid &&
      // prevState.expirationMonth.isValid &&
      // prevState.expirationYear.isValid &&
      // prevState.cvc.isValid
      isStateValid: !fields.some(
        (x) => (prevState[x as StateKey] as ValidationField).isValid === false
      )
    }))
  }

  const setValidation = (key: StateKey, isValid: boolean, error: string) => {
    dispatch((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        isValid,
        error
      }
    }))
  }

  const onCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const key = 'cardNumber'
    const { value } = event.target

    // maxlength === 20 chars
    if (value.length > 19) return

    dispatch((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        value: trimFullString(value)
      }
    }))
  }

  const validateName = () => {
    const key = 'name'
    const { value } = state[key]

    if (value.trim().length === 0) {
      setValidation(key, false, "Can't be blank")
      return
    }

    setValidation(key, true, '')
  }

  const validateCardNumber = () => {
    const key = 'cardNumber'
    const { value } = state[key]
    const onlyNumbersRegex = new RegExp(/^[0-9]*$/)

    const length = trimFullString(value).length

    if (length < 1) {
      setValidation(key, false, "Can't be blank")
      return
    }

    if (!onlyNumbersRegex.test(value)) {
      setValidation(key, false, 'Wrong format, numbers only')
      return
    }

    if (length !== 16) {
      setValidation(key, false, 'Must be 16 digitals')
      return
    }

    setValidation(key, true, '')
  }

  const validateExpirationMonth = () => {
    const key = 'expirationMonth'
    const { value } = state[key]
    const onlyNumbersRegex = new RegExp(/^[0-9]*$/)

    if (value.trim().length < 1) {
      setValidation(key, false, "Can't be blank")
      return
    }

    if (!onlyNumbersRegex.test(value)) {
      setValidation(key, false, 'Wrong format, numbers only')
      return
    }

    if (parseInt(value) < 1 || parseInt(value) > 12) {
      setValidation(key, false, 'Only digits between 1 and 12 allowed')
      return
    }

    setValidation(key, true, '')
  }

  const validateExpirationYear = () => {
    const key = 'expirationYear'
    const { value } = state[key]
    const onlyNumbersRegex = new RegExp(/^[0-9]*$/)

    if (value.trim().length < 1) {
      setValidation(key, false, "Can't be blank")
      return
    }

    if (!onlyNumbersRegex.test(value)) {
      setValidation(key, false, 'Wrong format, numbers only')
      return
    }

    if (parseInt(value) < 1 || parseInt(value) > 99) {
      setValidation(key, false, 'Only digits between 1 and 99 allowed')
      return
    }

    setValidation(key, true, '')
  }

  const validateCvc = () => {
    const key = 'cvc'
    const { value } = state[key]

    if (value.trim().length === 0) {
      setValidation(key, false, "Can't be blank")
      return
    }

    setValidation(key, true, '')
  }

  return { state, onChange, onClick, onCardNumberChange }
}
