import React from 'react'
import { useCardContext } from '../../hooks/use-card-context'
import BackgroundDesktop from '../../images/bg-main-desktop.png'
import { trimFullString } from '../../utils/stringHelper'
import { CardInput } from '../card-input'

export function InteractiveCardForm() {
  const { state, onCardNumberChange, onChange, onClick } = useCardContext()

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
      <div className='relative'>
        <img alt='' src={BackgroundDesktop} />
        <div className='absolute'></div>
      </div>
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
