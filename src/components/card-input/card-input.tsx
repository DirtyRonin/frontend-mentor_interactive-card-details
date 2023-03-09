import React from 'react'
import { ValidationField } from '../interactive-card'

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
    <label className='uppercase'>
      {label}
      <input
        value={formatDisplay ? formatDisplay(value) : value}
        type='text'
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg text-dark-grayish-violet focus:ring ${
          !isValid
            ? 'focus:ring-input-error border-input-error'
            : 'focus:ring-light-grayish-violet border-light-grayish-violet'
        }`}></input>
      {!isValid ? (
        <p className='mt-2  text-input-error text-xxs'>{error}</p>
      ) : null}
    </label>
  )
}
