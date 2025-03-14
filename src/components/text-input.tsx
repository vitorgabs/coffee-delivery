import { ComponentProps, useRef } from 'react'

interface Props extends ComponentProps<'input'> {
  optional?: boolean
  error?: string
}

export function TextInput({ optional = false, error, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div className="bg-input border-button focus-within:border-yellow-dark relative flex h-10.5 w-full items-center rounded-sm border px-3">
        <input
          ref={inputRef}
          type="text"
          className="placeholder-label peer h-full w-full text-sm outline-0 focus:placeholder-transparent"
          {...rest}
        />
        {optional && (
          <span
            onClick={() => inputRef.current?.focus()}
            className="text-label ml-1 text-xs italic peer-focus:hidden"
          >
            Opcional
          </span>
        )}
      </div>
      {error && <small className="text-xs text-red-500">{error}</small>}
    </div>
  )
}
