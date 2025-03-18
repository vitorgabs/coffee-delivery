import { ReactNode, useReducer } from 'react'

import { CartContext } from './cart-context'
import { cartReducer, Item } from '../reducers/cart-reducer'
import {
  addItemAction,
  removeItemAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
} from '../reducers/cart-actions'

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispatch] = useReducer(cartReducer, [] as Item[])
  const cartItemCount = items.length

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

  return (
    <CartContext.Provider
      value={{
        items,
        cartItemCount,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
