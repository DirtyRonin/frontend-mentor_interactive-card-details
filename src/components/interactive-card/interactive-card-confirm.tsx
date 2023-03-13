import IconComplete from '../../images/icon-complete.svg'

export function InteractiveCardConfirm() {
  return (
    <div className='bg-white flex flex-col w-[21rem] justify-center items-center p-6'>
      <img className='mb-7' alt='' src={IconComplete} />
      <h2 className='uppercase mb-[.75rem] font-medium text-very-dark-violet text-2xl tracking-widest '>
        thank you!
      </h2>
      <p className='mb-10 text-dark-grayish-violet font-medium'>
        We've added your card details
      </p>
      <button className='capitalize w-full bg-very-dark-violet p-3 rounded-lg text-white'>
        Continue
      </button>
    </div>
  )
}
