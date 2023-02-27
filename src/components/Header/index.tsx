import { CartButton, HeaderContainer, LocationSpan } from './styles'
import CoffeeDeliveryLogo from '../../assets/Logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
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
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
