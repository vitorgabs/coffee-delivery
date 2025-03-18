import { CartActionTypes, CartAction } from './cart-actions'

export type Item = {
  id: string
  quantity: number
}

export function cartReducer(items: Item[], action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const itemExistsInCart = items.find(
        (item) => item.id === action.payload.item.id
      )

      if (itemExistsInCart) {
        return items.map((item) =>
          item.id === action.payload.item.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.item.quantity,
              }
            : item
        )
      }

      return [...items, action.payload.item]
    }

    case CartActionTypes.REMOVE_ITEM: {
      return items.filter((item) => item.id !== action.payload.id)
    }

    case CartActionTypes.INCREMENT_ITEM_QUANTITY: {
      return items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }

    case CartActionTypes.DECREMENT_ITEM_QUANTITY: {
      return items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    }
  }
}
