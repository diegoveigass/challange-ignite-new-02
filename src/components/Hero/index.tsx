import { ReactNode } from 'react'
import { HeroContainer, QualityContainer, QualityItems } from './styles'
import heroImg from '../../assets/logo-hero.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

interface QualityProps {
  id: number
  text: string
  icon: ReactNode
  color: 'yellow' | 'purple' | 'yellowDark' | 'baseText'
}

const qualities: QualityProps[] = [
  {
    id: 1,
    text: 'Compra simples e segura',
    icon: <ShoppingCart weight="fill" size={16} color="#fff" />,
    color: 'yellowDark',
  },
  {
    id: 2,
    text: 'Embalagem mantém o café intacto',
    icon: <Package weight="fill" size={16} color="#fff" />,
    color: 'baseText',
  },
  {
    id: 3,
    text: 'Entrega rápida e rastreada',
    icon: <Timer weight="fill" size={16} color="#fff" />,
    color: 'yellow',
  },
  {
    id: 4,
    text: 'O café chega fresquinho até você',
    icon: <Coffee weight="fill" size={16} color="#fff" />,
    color: 'purple',
  },
]

export function Hero() {
  return (
    <HeroContainer>
      <main>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <QualityContainer>
          {qualities.map((quality) => (
            <QualityItems key={quality.id} backgroundColor={quality.color}>
              <div>{quality.icon}</div>
              <span>{quality.text}</span>
            </QualityItems>
          ))}
        </QualityContainer>
      </main>
      <aside>
        <img src={heroImg} alt="Copo de café" />
      </aside>
    </HeroContainer>
  )
}
