import { useCardContext } from '../../hooks/use-card-context'
import { divideFourCharsByAnEmptySpace } from '../../utils/stringHelper'
import { CardInput } from '../card-input'

export function InteractiveCardForm() {
  const { state, onCardNumberChange, onChange, onClick } = useCardContext()

  return (
    <div className='bg-white flex justify-center items-center'>
      <form className='grid lg:grid-cols-form-desktop lg:gap-8 lg:px-4 grid-cols-form-mobile gap-4 px-6'>
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
          <label className='uppercase text-label-mobile font-medium'>
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
          className='capitalize bg-very-dark-violet p-3 rounded-lg text-white'>
          Confirm
        </button>
      </form>
    </div>
  )
}
