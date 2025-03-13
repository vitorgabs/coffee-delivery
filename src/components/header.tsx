import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logo from '../assets/logo.svg'

export function Header() {
  const cartItemCount = 0

  return (
    <header className="mx-auto flex max-w-6xl justify-between py-8">
      <img src={logo} alt="Logo do Coffee Delivery" />

      <div className="flex gap-3">
        <span className="bg-purple-light text-purple-dark flex items-center gap-1 rounded-md p-2 text-sm">
          <MapPin weight="fill" className="text-purple size-5.5" />
          Recife, PE
        </span>

        <div className="bg-yellow-light relative rounded-md p-2">
          <ShoppingCart weight="fill" className="text-yellow-dark size-5.5" />
          {cartItemCount > 0 && (
            <div className="bg-yellow-dark absolute top-0 right-0 flex size-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
              <span className="text-xs font-bold text-white">
                {cartItemCount}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
