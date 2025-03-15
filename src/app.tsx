import { Outlet } from 'react-router'
import { Header } from './components/header'

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
