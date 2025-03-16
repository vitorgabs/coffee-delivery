import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import { CoffeeCard } from '../components/coffee-card'

import { coffees } from '../data.json'

import hero from '../assets/hero.png'
import heroSectionBg from '../assets/hero-bg.png'

export function Home() {
  return (
    <main className="pb-8">
      <section className="relative mx-auto mt-23.5 max-w-7xl">
        <div className="flex justify-between gap-14 px-20">
          <div className="max-w-xl">
            <h1 className="font-heading text-title mb-4 text-5xl leading-tight">
              Encontre o café perfeito para qualquer hora do dia
            </h1>

            <span className="text-subtitle text-xl">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>

            <ul className="mt-16.5 grid grid-cols-[max-content_max-content] gap-x-10 gap-y-5">
              <li className="flex items-center gap-3">
                <span className="bg-yellow-dark rounded-full p-2">
                  <ShoppingCart weight="fill" className="text-white" />
                </span>
                Compra simples e segura
              </li>

              <li className="flex items-center gap-3">
                <span className="bg-text rounded-full p-2">
                  <Package weight="fill" className="text-white" />
                </span>
                Embalagem mantém o café intacto
              </li>

              <li className="flex items-center gap-3">
                <span className="bg-yellow rounded-full p-2">
                  <Timer weight="fill" className="text-white" />
                </span>
                Entrega rápida e rastreada
              </li>

              <li className="flex items-center gap-3">
                <span className="bg-purple rounded-full p-2">
                  <Coffee weight="fill" className="text-white" />
                </span>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>

          <img src={hero} alt="Café do Coffee Delivery" className="w-[476px]" />
        </div>
        <img
          src={heroSectionBg}
          alt=""
          className="absolute top-0 -z-10 h-full w-full"
        />
      </section>

      <section className="mx-auto mt-8 w-6xl">
        <h2 className="text-subtitle font-heading text-[2rem] font-extrabold">
          Nossos cafés
        </h2>

        <ul className="mt-13.5 grid grid-cols-4 gap-x-8 gap-y-10">
          {coffees.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCard {...coffee} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
