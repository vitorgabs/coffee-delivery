import { ReactNode, useState } from 'react'

import { CartContext, Item } from './cart-context'

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState([] as Item[])
  const cartItemCount = items.length

  function addItem(newItem: Item) {
    setItems((prevItems) => {
      const isAlreadyInCart = prevItems.find((item) => item.id === newItem.id)

      if (isAlreadyInCart) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }

      return [...prevItems, newItem]
    })
  }

  function removeItem(id: string) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function decrementItemQuantity(id: string) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    )
  }

  function incrementItemQuantity(id: string) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
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
