import { ReactNode, useReducer } from 'react'
import { useNavigate } from 'react-router'

import { CartContext } from './cart-context'
import { cartReducer, Item } from '../reducers/cart-reducer'
import {
  addItemAction,
  removeItemAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
  checkoutCartAction,
} from '../reducers/cart-actions'
import { OrderInfo } from '../pages/checkout'

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], orders: [] })
  const { items, orders } = cart
  const cartItemCount = items.length

  const navigate = useNavigate()

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(id: string) {
    dispatch(removeItemAction(id))
  }

  function incrementItemQuantity(id: string) {
    dispatch(incrementItemQuantityAction(id))
  }

  function decrementItemQuantity(id: string) {
    dispatch(decrementItemQuantityAction(id))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        orders,
        cartItemCount,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
