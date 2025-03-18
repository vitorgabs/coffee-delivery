import { createContext } from 'react'

import { Item } from '../reducers/cart-reducer'

interface CartContextData {
  items: Item[]
  cartItemCount: number
  addItem: (item: Item) => void
  removeItem: (id: string) => void
  decrementItemQuantity: (id: string) => void
  incrementItemQuantity: (id: string) => void
}

export const CartContext = createContext({} as CartContextData)
