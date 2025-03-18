import { OrderInfo } from '../pages/checkout'
import { CartActionTypes, CartAction } from './cart-actions'

export type Item = {
  id: string
  quantity: number
}

export type Order = OrderInfo & {
  id: string
  items: Item[]
}

export type Cart = {
  items: Item[]
  orders: Order[]
}

export function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const itemExistsInCart = state.items.find(
        (item) => item.id === action.payload.item.id
      )

      if (itemExistsInCart) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.item.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.item.quantity,
                }
              : item
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload.item],
      }
    }

    case CartActionTypes.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    }

    case CartActionTypes.INCREMENT_ITEM_QUANTITY: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }
    }

    case CartActionTypes.DECREMENT_ITEM_QUANTITY: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }
    }

    case CartActionTypes.CHECKOUT_CART: {
      const newOrder = {
        id: Date.now().toString(),
        items: state.items,
        ...action.payload.order,
      }

      action.payload.callback(`/order/${newOrder.id}/success`)

      return {
        orders: [...state.orders, newOrder],
        items: [],
      }
    }

    default:
      return state
  }
}
