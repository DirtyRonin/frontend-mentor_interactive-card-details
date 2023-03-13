import {
  InteractiveCardBack,
  InteractiveCardConfirm,
  InteractiveCardForm,
  InteractiveCardFront
} from '.'
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
      <div className='grid lg:grid-cols-interactive-card-desktop grid-cols-[21rem] '>
        <div className='relative lg:bg-main-desktop-pattern lg:h-desktop h-mobile bg-main-mobile-pattern w-full flex flex-col lg:gap-8 justify-center'>
          <div className='xl:ml-36 lg:static lg:ml-14 absolute top-[7.25rem] left-[.5rem]'>
            <InteractiveCardFront />
          </div>
          <div className='xl:ml-56 lg:ml-28 md:ml-[3.75rem]'>
            <InteractiveCardBack />
          </div>
        </div>
        <div className='bg-white lg:pl-28 lg:pt-0 lg:pb-0 pt-20 pb-10 flex justify-center items-center'>
          {state.isStateValid ? (
            <InteractiveCardConfirm />
          ) : (
            <InteractiveCardForm />
          )}
        </div>
      </div>
    </CardContext.Provider>
  )
}
