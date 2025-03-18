import { NavigateFunction } from 'react-router'

import { OrderInfo } from '../pages/checkout'
import { Item } from './cart-reducer'

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type CartAction =
  | { type: CartActionTypes.ADD_ITEM; payload: { item: Item } }
  | {
      type:
        | CartActionTypes.REMOVE_ITEM
        | CartActionTypes.INCREMENT_ITEM_QUANTITY
        | CartActionTypes.DECREMENT_ITEM_QUANTITY
      payload: { id: Item['id'] }
    }
  | {
      type: CartActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }

export function addItemAction(item: Item) {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: { item },
  } satisfies CartAction
}

export function removeItemAction(id: Item['id']) {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: { id },
  } satisfies CartAction
}

export function incrementItemQuantityAction(id: Item['id']) {
  return {
    type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: { id },
  } satisfies CartAction
}

export function decrementItemQuantityAction(id: Item['id']) {
  return {
    type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: { id },
  } satisfies CartAction
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction
) {
  return {
    type: CartActionTypes.CHECKOUT_CART,
    payload: { order, callback },
  } satisfies CartAction
}
