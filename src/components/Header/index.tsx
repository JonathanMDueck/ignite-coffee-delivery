import { CartButton, Counter, HeaderContainer, LocationSpan } from './styles'
import CoffeeDeliveryLogo from '../../assets/Logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { SelectedCoffeeContext } from '../../contexts/selectedCoffeeContext'

export function Header() {
  const { countCoffeeQuantity } = useContext(SelectedCoffeeContext)

  const quantity = countCoffeeQuantity()

  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />
      <nav>
        <LocationSpan>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationSpan>
        <NavLink to={'/orderdetails'}>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            <Counter active={quantity > 0}>{quantity}</Counter>
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
