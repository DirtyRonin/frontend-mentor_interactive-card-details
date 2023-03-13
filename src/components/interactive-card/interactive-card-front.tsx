import { useCardContext } from '../../hooks/use-card-context'
import { divideFourCharsByAnEmptySpace } from '../../utils/stringHelper'
import CardLogo from '../../images/card-logo.svg'

export function InteractiveCardFront() {
  const {
    state: { cardNumber, name, expirationMonth, expirationYear }
  } = useCardContext()

  return (
    <div className='bg-center bg-no-repeat bg-contain bg-card-front-pattern grid grid-rows-4  text-white  lg:w-card-desktop lg:h-card-desktop lg:pt-6 lg:px-7 lg:gap-1.5 w-card-mobile h-card-mobile pt-4 px-5  '>
      <img className='lg:h-auto h-7' alt='' src={CardLogo} />
      <div></div>
      <p className='tracking-widest lg:text-2xltext-base'>
        {divideFourCharsByAnEmptySpace(cardNumber.value || '0000000000000000')}
      </p>
      <div className='flex justify-between tracking-widest lg:font-normal lg:text-xs text-xxs2 font-light'>
        <p className='uppercase'>{name.value || 'Jane Appleseed'}</p>
        <p>{`${expirationMonth.value || '00'}/${
          expirationYear.value || '00'
        }`}</p>
      </div>
    </div>
  )
}
