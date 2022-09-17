import logoImg from '../../assets/logo-header.svg'
import { CartButton, HeaderContainer, LocationButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <nav>
        <LocationButton>
          <MapPin size={32} weight="fill" />
          São Carlos, SP
        </LocationButton>
        <CartButton>
          <ShoppingCart size={32} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
