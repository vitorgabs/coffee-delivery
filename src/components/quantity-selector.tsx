import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

interface Props {
  onDecrement: () => void
  onIncrement: () => void
  initialValue?: number
}

export function QuantitySelector({
  onDecrement,
  onIncrement,
  initialValue = 1,
}: Props) {
  const [quantity, setQuantity] = useState(initialValue)

  function decrement() {
    if (quantity === 1) return

    setQuantity((prevQuantity) => prevQuantity - 1)
    onDecrement()
  }

  function increment() {
    setQuantity((prevQuantity) => prevQuantity + 1)
    onIncrement()
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
