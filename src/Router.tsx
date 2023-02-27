import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Home } from './pages/Home'
import { OrderDetails } from './pages/OrderDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
      </Route>
    </Routes>
  )
}
