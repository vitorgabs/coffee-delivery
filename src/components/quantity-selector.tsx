import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  function decrement() {
    if (quantity === 1) return
    setQuantity((prevState) => prevState - 1)
  }

  function increment() {
    setQuantity((prevState) => prevState + 1)
  }

  return (
    <div className="bg-button relative flex w-18 items-center justify-center rounded-md">
      <button
        type="button"
        className="text-purple hover:text-purple-dark absolute left-2 cursor-pointer"
        onClick={decrement}
      >
        <Minus weight="bold" size={14} />
      </button>
      <span className="text-title">{quantity}</span>
      <button
        type="button"
        className="text-purple hover:text-purple-dark absolute right-2 cursor-pointer"
        onClick={increment}
      >
        <Plus weight="bold" size={14} />
      </button>
    </div>
  )
}
