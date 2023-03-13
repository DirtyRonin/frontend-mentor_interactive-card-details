import { useCardContext } from '../../hooks/use-card-context'

export function InteractiveCardBack() {
  const {
    state: { cvc }
  } = useCardContext()

  return (
    <p
      className='flex justify-end items-center bg-center bg-no-repeat bg-contain bg-card-back-pattern text-white  tracking-widest
    lg:w-card-desktop lg:h-card-desktop lg:pr-14 lg:pb-1  lg:font-normal lg:text-xs 
    w-card-mobile h-card-mobile font-light text-xxs2 pr-9 '>
      {cvc.value || '000'}
    </p>
  )
}
