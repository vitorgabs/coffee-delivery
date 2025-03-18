import { createContext } from 'react'

import { Item, Order } from '../reducers/cart-reducer'
import { OrderInfo } from '../pages/checkout'

interface CartContextData {
  items: Item[]
  orders: Order[]
  cartItemCount: number
  addItem: (item: Item) => void
  removeItem: (id: string) => void
  decrementItemQuantity: (id: string) => void
  incrementItemQuantity: (id: string) => void
  checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextData)
