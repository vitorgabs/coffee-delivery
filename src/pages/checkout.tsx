import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import { CartItem } from '../components/cart-item'
import { TextInput } from '../components/text-input'
import { PaymentOption } from '../components/payment-option'

import { useCart } from '../hooks/use-cart'
import { toBrlCurrency } from '../utils/formatters'
import { coffees } from '../data.json'

const orderSchema = z.object({
  zip: z.string().nonempty('Campo obrigatório').length(8, 'Formato inválido'),
  street: z.string().nonempty('Campo obrigatório'),
  number: z.string().nonempty('Campo obrigatório'),
  complement: z.string(),
  neighborhood: z.string().nonempty('Campo obrigatório'),
  city: z.string().nonempty('Campo obrigatório'),
  state: z.string().length(2, 'ex: PE'),
  payment: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Selecione uma forma de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof orderSchema>

export function Checkout() {
  const { items, checkout } = useCart()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
  })

  const paymentOption = watch('payment')
  const state = watch('state') ?? ''

  const PAYMENT_OPTIONS = [
    { title: 'cartão de crédito', value: 'credit', icon: CreditCard },
    { title: 'cartão de débito', value: 'debit', icon: Bank },
    { title: 'dinheiro', value: 'cash', icon: Money },
  ]

  const coffeesInCart = items.map((item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.id)!
    return {
      ...coffee,
      quantity: item.quantity,
    }
  })

  const deliveryFee = 3.5
  const itemsPrice = coffeesInCart.reduce(
    (totalPrice, coffee) => totalPrice + coffee.price * coffee.quantity,
    0
  )

  const orderPrice = itemsPrice + deliveryFee

  return (
    <main className="mx-auto my-10 grid max-w-6xl grid-cols-[1fr_28rem] gap-8">
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
              <TextInput
                placeholder="CEP"
                maxLength={8}
                error={errors.zip}
                {...register('zip')}
              />

              <div className="col-span-3">
                <TextInput
                  placeholder="Rua"
                  error={errors.street}
                  {...register('street')}
                />
              </div>

              <TextInput
                placeholder="Número"
                error={errors.number}
                {...register('number')}
              />

              <div className="col-span-2">
                <TextInput
                  placeholder="Complemento"
                  optional
                  {...register('complement')}
                />
              </div>

              <TextInput
                placeholder="Bairro"
                error={errors.neighborhood}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                error={errors.city}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                error={errors.state}
                value={state.toUpperCase()}
                {...register('state')}
              />
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

            <div>
              <div className="mt-8 flex gap-3">
                {PAYMENT_OPTIONS.map(({ value, ...rest }) => (
                  <PaymentOption
                    key={value}
                    value={value}
                    isSelected={paymentOption === value}
                    {...rest}
                    {...register('payment')}
                  />
                ))}
              </div>
              {errors.payment && (
                <small className="text-xs text-red-500">
                  {errors.payment.message}
                </small>
              )}
            </div>
          </fieldset>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-subtitle font-heading text-lg font-bold">
          Cafés selecionados
        </h2>

        <div className="bg-card rounded-tr-5xl rounded-bl-5xl space-y-6 rounded-tl-md rounded-br-md p-10">
          {coffeesInCart.map((coffee) => (
            <div key={coffee.id} className="space-y-6">
              <CartItem {...coffee} />
              <div className="bg-button h-px w-full" />
            </div>
          ))}

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total de itens</span>
              <span>{toBrlCurrency(itemsPrice)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Entrega</span>
              <span>{toBrlCurrency(deliveryFee)}</span>
            </div>

            <div className="text-subtitle flex items-center justify-between text-xl font-bold">
              <span>Total</span>
              <span>{toBrlCurrency(orderPrice)}</span>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit(checkout)}
            className="bg-yellow hover:bg-yellow-dark w-full cursor-pointer rounded-md px-2 py-3 transition-colors"
          >
            <span className="text-sm leading-relaxed font-bold text-white uppercase">
              confirmar pedido
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}
