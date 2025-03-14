import { useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import { Header } from '../components/header'
import { CartItem } from '../components/cart-item'
import { TextInput } from '../components/text-input'
import { PaymentOption } from '../components/payment-option'

import { toBrlCurrency } from '../utils/formatters'

export function Checkout() {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('')

  const PAYMENT_OPTIONS = [
    { title: 'cartão de crédito', value: 'credit', icon: CreditCard },
    { title: 'cartão de débito', value: 'debit', icon: Bank },
    { title: 'dinheiro', value: 'cash', icon: Money },
  ]

  return (
    <>
      <Header />

      <main className="mx-auto grid max-w-6xl grid-cols-[1fr_28rem] gap-8">
        <section className="space-y-4">
          <h2 className="text-subtitle font-heading text-lg font-bold">
            Complete seu pedido
          </h2>

          <form className="space-y-3">
            <fieldset className="bg-card rounded-md p-10">
              <div className="flex gap-2">
                <MapPinLine className="text-yellow size-5.5" />

                <div className="flex flex-col">
                  <span className="text-subtitle">Endereço de Entrega</span>

                  <small className="text-sm">
                    Informe o endereço onde deseja receber seu pedido
                  </small>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-[12.5rem_1fr_3.75rem] gap-3">
                <TextInput placeholder="CEP" maxLength={8} />

                <div className="col-span-3">
                  <TextInput placeholder="Rua" />
                </div>

                <TextInput placeholder="Número" />

                <div className="col-span-2">
                  <TextInput placeholder="Complemento" optional />
                </div>

                <TextInput placeholder="Bairro" />

                <TextInput placeholder="Cidade" />

                <TextInput placeholder="UF" maxLength={2} />
              </div>
            </fieldset>

            <fieldset className="bg-card rounded-md p-10">
              <div className="flex gap-2">
                <CurrencyDollar className="text-purple size-5.5" />

                <div className="flex flex-col">
                  <span className="text-subtitle">Pagamento</span>

                  <small className="text-sm">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </small>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {PAYMENT_OPTIONS.map(({ value, ...rest }) => (
                  <PaymentOption
                    isSelected={selectedPaymentOption === value}
                    onClick={() => setSelectedPaymentOption(value)}
                    {...rest}
                  />
                ))}
              </div>
            </fieldset>
          </form>
        </section>

        <section className="space-y-4">
          <h2 className="text-subtitle font-heading text-lg font-bold">
            Cafés selecionados
          </h2>

          <div className="bg-card rounded-tr-5xl rounded-bl-5xl space-y-6 rounded-tl-md rounded-br-md p-10">
            <CartItem
              image="/images/coffees/expresso.png"
              title="expresso tradicional"
              price={9.9}
            />

            <div className="bg-button h-px w-full" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total de itens</span>
                <span>{toBrlCurrency(29.7)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Entrega</span>
                <span>{toBrlCurrency(3.5)}</span>
              </div>

              <div className="text-subtitle flex items-center justify-between text-xl font-bold">
                <span>Total</span>
                <span>{toBrlCurrency(33.2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-yellow hover:bg-yellow-dark w-full cursor-pointer rounded-md px-2 py-3 transition-colors"
            >
              <span className="text-sm leading-relaxed font-bold text-white uppercase">
                confirmar pedido
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
