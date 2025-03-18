import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router'

import { useCart } from '../hooks/use-cart'

import logo from '../assets/logo.svg'

export function Header() {
  const { pathname } = useLocation()
  const { cartItemCount, orders } = useCart()

  const onSuccessPage = pathname.includes('/success')
  const order = orders[orders.length - 1]

  return (
    <header className="mx-auto flex max-w-6xl justify-between py-8">
      <Link to="/">
        <img src={logo} alt="Logo do Coffee Delivery" />
      </Link>

      <div className="flex gap-3">
        {onSuccessPage && (
          <span className="bg-purple-light text-purple-dark flex items-center gap-1 rounded-md p-2 text-sm capitalize">
            <MapPin weight="fill" className="text-purple size-5.5" />
            {`${order.city}, ${order.state}`}
          </span>
        )}

        <Link
          to="/checkout"
          className="bg-yellow-light relative rounded-md p-2"
        >
          <ShoppingCart weight="fill" className="text-yellow-dark size-5.5" />
          {!onSuccessPage && (
            <div className="bg-yellow-dark absolute top-0 right-0 flex size-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
              <span className="text-xs font-bold text-white">
                {cartItemCount}
              </span>
            </div>
          )}
        </Link>
      </div>
    </header>
  )
}
