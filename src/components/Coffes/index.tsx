import { ShoppingCart } from 'phosphor-react'

import coffeImg from '../../assets/coffe.png'
import { Coffe, CoffesContainer, PriceContainer, Tag, BuyCoffe } from './styles'

export function Coffes() {
  return (
    <CoffesContainer>
      <h1>Nossos cafés</h1>
      <ul>
        <Coffe>
          <img src={coffeImg} alt="Café" />
          <Tag>Tradicional</Tag>
          <main>
            <strong>Expresso tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </main>

          <PriceContainer>
            <span>
              R$ <strong>9,90</strong>
            </span>
            <input type="number" min="1" max="99" />
            <BuyCoffe>
              <ShoppingCart size={22} weight="fill" color="#fff" />
            </BuyCoffe>
          </PriceContainer>
        </Coffe>
      </ul>
    </CoffesContainer>
  )
}
