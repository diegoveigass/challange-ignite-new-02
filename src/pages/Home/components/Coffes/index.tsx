import { CoffeCard } from '../CoffeCard'

import { CoffesContainer } from './styles'

export type CoffeType = {
  id: number
  tags: string[]
  name: string
  description: string
  imageSrc: string
  price: number
}

const coffes: CoffeType[] = [
  {
    id: 1,
    tags: ['Tradiciasdaonal'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageSrc: 'coffe-1.png',
    price: 9.9,
  },
  {
    id: 2,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'O americano café feito com água quente e grãos moídos',
    imageSrc: 'coffe-2.png',
    price: 9.9,
  },
  {
    id: 3,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description: 'O capuccnio café feito com água quente e grãos moídos',
    imageSrc: 'coffe-3.png',
    price: 9.9,
  },
  {
    id: 4,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description: 'O Macchiato café feito com água quente e grãos moídos',
    imageSrc: 'coffe-4.png',
    price: 9.9,
  },
  {
    id: 5,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'O Mocaccino café feito com água quente e grãos moídos',
    imageSrc: 'coffe-5.png',
    price: 9.9,
  },
  {
    id: 6,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'O chocolate quente feito com água quente e grãos moídos',
    imageSrc: 'coffe-6.png',
    price: 9.9,
  },
  {
    id: 7,
    tags: ['Especial', 'Alcóolico', 'Gelado'],
    name: 'Cubano',
    description: 'O chocolate quente feito com água quente e grãos moídos',
    imageSrc: 'coffe-7.png',
    price: 9.9,
  },
  {
    id: 8,
    tags: ['Especial', 'Alcóolico', 'Gelado'],
    name: 'Cubano',
    description: 'O chocolate quente feito com água quente e grãos moídos',
    imageSrc: 'coffe-8.png',
    price: 9.9,
  },
]

export function Coffes() {
  return (
    <CoffesContainer>
      <h1>Nossos cafés</h1>
      <ul>
        {coffes.map((coffe) => (
          <CoffeCard key={coffe.id} coffe={coffe} />
        ))}
      </ul>
    </CoffesContainer>
  )
}
