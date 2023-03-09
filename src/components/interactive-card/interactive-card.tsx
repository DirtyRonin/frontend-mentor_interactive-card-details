import React from 'react'
import BackgroundDesktop from '../../images/bg-main-desktop.png'
import { trimFullString } from '../../utils/stringHelper'
import { CardInput } from '../card-input'

interface State {
  name: ValidationField
  cardNumber: ValidationField
  expirationMonth: ValidationField
  expirationYear: ValidationField
  cvc: ValidationField
}

export interface ValidationField {
  name: string
  isValid: boolean
  error: string
  value: string
}

type StateKey =
  | 'name'
  | 'cardNumber'
  | 'expirationMonth'
  | 'expirationYear'
  | 'cvc'

export function InteractiveCard() {
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
    cvc: { name: 'cvc', isValid: true, error: '', value: '' }
  })

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    validateName()
    validateCardNumber()
    validateExpirationMonth()
    validateExpirationYear()
    validateCvc()
  }

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

    // const fullyTrimmed= trimFullString(value)
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

  const onCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const key = 'cardNumber'
    const { value } = event.target

    dispatch((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        value: trimFullString(value)
      }
    }))
  }

  const divideFourCharsByAnEmptySpace = (display: string): string => {
    let displaySegments: string[] = []
    let rest = trimFullString(display)

    while (rest.length > 0) {
      let length = rest.length > 4 ? 4 : rest.length || 0
      displaySegments.push(`${rest.slice(0, length)}`)
      rest = rest.slice(length)
    }

    return displaySegments.join(' ')
  }

  return (
    <div className='grid grid-cols-[1fr_2fr]'>
      <img alt='' src={BackgroundDesktop} />
      <div className='bg-white flex justify-center items-center'>
        <form className='grid w-96 grid-cols-1 gap-8'>
          <CardInput
            validationField={state.name}
            label='cardholder name'
            placeholder='e.g. Jane Appleseed'
            onChange={onChange}
          />
          <CardInput
            validationField={state.cardNumber}
            label='card number'
            placeholder='e.g. 1234 5678 8123 0000'
            onChange={onCardNumberChange}
            formatDisplay={divideFourCharsByAnEmptySpace}
          />

          <div className='grid grid-cols-2 gap-4'>
            <label className='uppercase'>
              exp. date (mm/yy)
              <div className='grid grid-cols-2 gap-2'>
                <CardInput
                  validationField={state.expirationMonth}
                  label=''
                  placeholder='MM'
                  onChange={onChange}
                />
                <CardInput
                  validationField={state.expirationYear}
                  label=''
                  placeholder='YY'
                  onChange={onChange}
                />
              </div>
            </label>
            <CardInput
              validationField={state.cvc}
              label='cvc'
              placeholder='e.g. 123'
              onChange={onChange}
            />
          </div>
          <button
            onClick={onClick}
            className='capitalize bg-very-dark-violet p-2 rounded-lg text-white'>
            Confirm
          </button>
        </form>
      </div>
    </div>
  )
}
