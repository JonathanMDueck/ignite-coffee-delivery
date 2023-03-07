import { AddressContainer } from './components/AddressContainer'
import { SelectedCoffeeDetails } from './components/SelectedCoffeeDetails'
import { OrderDetailsContainer } from './styles'

export function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <AddressContainer />
      <SelectedCoffeeDetails />
    </OrderDetailsContainer>
  )
}
