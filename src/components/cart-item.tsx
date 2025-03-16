import { Trash } from '@phosphor-icons/react'

import { QuantitySelector } from './quantity-selector'

import { useCart } from '../hooks/use-cart'
import { toBrlCurrency } from '../utils/formatters'

interface Props {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export function CartItem({ id, title, price, quantity, image }: Props) {
  const { decrementItemQuantity, incrementItemQuantity, removeItem } = useCart()

  return (
    <div className="flex gap-5 bg-transparent px-1 py-2">
      <img src={image} className="size-16" />

      <div className="flex flex-col gap-2">
        <span className="text-subtitle capitalize">{title}</span>

        <div className="flex gap-2">
          <QuantitySelector
            initialValue={quantity}
            onDecrement={() => decrementItemQuantity(id)}
            onIncrement={() => incrementItemQuantity(id)}
          />

          <button
            type="button"
            onClick={() => removeItem(id)}
            className="bg-button hover:bg-hover group flex cursor-pointer items-center gap-1 rounded-md p-2 transition-colors"
          >
            <Trash className="text-purple size-4" />
            <span className="text-text group-hover:text-subtitle text-xs uppercase">
              remover
            </span>
          </button>
        </div>
      </div>

      <span className="text-text ml-auto font-bold">
        {toBrlCurrency(price * quantity)}
      </span>
    </div>
  )
}
