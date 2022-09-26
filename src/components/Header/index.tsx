import logoImg from '../../assets/logo-header.svg'
import { CartButton, HeaderContainer, LocationButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleNavigateToCart() {
    navigate({
      pathname: '/checkout',
    })
  }

  function handleNavigateToHome() {
    navigate({
      pathname: '/',
    })
  }

  return (
    <HeaderContainer>
      <img src={logoImg} alt="" onClick={handleNavigateToHome} />
      <nav>
        <LocationButton>
          <MapPin size={32} weight="fill" />
          São Carlos, SP
        </LocationButton>
        <CartButton onClick={handleNavigateToCart}>
          <ShoppingCart size={32} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
