import { Outlet } from 'react-router'
import { Header } from './components/header'
import { CartContextProvider } from './contexts/cart-provider'

export function App() {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  )
}
