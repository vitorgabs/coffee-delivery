import { useParams } from 'react-router'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { useCart } from '../hooks/use-cart'

import delivery from '../assets/delivery.png'

export function Success() {
  const { id } = useParams<{ id: string }>()
  const { orders } = useCart()

  const { street, number, neighborhood, city, state, payment } = orders.find(
    (order) => order.id === id
  )!

  const paymentOption = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro',
  }

  return (
    <main className="mx-auto mt-10 flex max-w-6xl items-end justify-between gap-26">
      <div>
        <h1 className="font-heading text-yellow-dark mb-1 text-[2rem] font-extrabold">
          Uhu! Pedido confirmado
        </h1>
        <span className="text-subtitle text-xl">
          Agora é só aguardar que logo o café chegará até você
        </span>

        <div className="from-yellow to-purple rounded-tr-5xl rounded-bl-5xl mt-10 rounded-tl-md rounded-br-md border border-transparent bg-gradient-to-r bg-origin-border">
          <div className="bg-background rounded-tr-5xl rounded-bl-5xl space-y-8 rounded-tl-md rounded-br-md p-10">
            <div className="flex items-center gap-3">
              <span className="bg-purple rounded-full p-2">
                <MapPin weight="fill" className="size-4 text-white" />
              </span>

              <div className="flex flex-col">
                <span>
                  Entrega em{' '}
                  <span className="font-bold capitalize">{`${street}, ${number}`}</span>
                </span>
                <span className="capitalize">{`${neighborhood} - ${city}, ${state}`}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-yellow rounded-full p-2">
                <Timer weight="fill" className="size-4 text-white" />
              </span>

              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <span className="font-bold">20 min - 30 min</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-yellow-dark rounded-full p-2">
                <CurrencyDollar className="size-4 text-white" />
              </span>

              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <span className="font-bold">{paymentOption[payment]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={delivery} />
    </main>
  )
}
