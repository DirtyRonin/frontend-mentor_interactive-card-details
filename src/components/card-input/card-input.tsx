import React from 'react'
import { ValidationField } from '../models/validation-field'

export function CardInput({
  validationField: { name, value, isValid, error },
  placeholder,
  label,
  onChange,
  formatDisplay
}: {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  formatDisplay?: (display: string) => string
  validationField: ValidationField
  placeholder: string
  label: string
}) {
  return (
    <label className='uppercase lg:text-xs text-label-mobile text-very-dark-violet tracking-widest font-medium'>
      {label}
      <input
        value={formatDisplay ? formatDisplay(value) : value}
        type='text'
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full mt-1 px-4 py-2 border rounded-lg text-base ${
          !isValid
            ? ' border-input-error'
            : ' focus:border-very-dark-violet border-light-grayish-violet'
        }`}></input>
      {!isValid ? (
        <p className='mt-2  text-input-error text-xxs'>{error}</p>
      ) : null}
    </label>
  )
}
