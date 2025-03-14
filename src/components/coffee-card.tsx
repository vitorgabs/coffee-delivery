import { ShoppingCartSimple } from '@phosphor-icons/react'

import { QuantitySelector } from './quantity-selector'

interface Props {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function CoffeeCard({ title, description, tags, price, image }: Props) {
  return (
    <article className="bg-card rounded-tr-5xl rounded-bl-5xl flex flex-col items-center rounded-tl-md rounded-br-md px-5 pb-5">
      <header className="-mt-5 flex flex-col items-center gap-3">
        <img src={image} alt="" className="size-30" />

        <div className="flex flex-wrap justify-center gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-yellow-light text-yellow-dark text-2xs rounded-full px-2 py-1 font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <h3 className="font-heading text-subtitle mt-4 text-xl font-bold">
        {title}
      </h3>

      <p className="text-label mt-2 text-center text-sm">{description}</p>

      <footer className="mt-8 flex w-full items-center justify-between px-1">
        <div className="space-x-1">
          <span className="text-text text-sm">R$</span>

          <span className="font-heading text-text text-2xl font-extrabold">
            {Intl.NumberFormat('pt-br', {
              style: 'decimal',
              minimumFractionDigits: 2,
            }).format(price)}
          </span>
        </div>

        <div className="flex gap-2">
          <QuantitySelector />

          <button
            type="button"
            className="bg-purple-dark hover:bg-purple cursor-pointer rounded-md p-2 transition-colors"
          >
            <ShoppingCartSimple weight="fill" className="size-5.5 text-white" />
          </button>
        </div>
      </footer>
    </article>
  )
}
