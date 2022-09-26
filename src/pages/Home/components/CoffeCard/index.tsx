import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useRef, useState } from 'react'
import { currencyFormat } from '../../../../util/format'
import { CoffeType } from '../Coffes'
import { Coffe, PriceContainer, InputContainer, BuyCoffe, Tag } from './styles'

type CoffeCardProps = {
  coffe: CoffeType
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [quantity, setQuantity] = useState(1)
  const formatedPrice = currencyFormat(coffe.price)

  function handleAddProductToCart(coffe: CoffeType) {
    console.log({
      coffe,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <Coffe key={coffe.id}>
      <img src={`./${coffe.imageSrc}`} alt="Café" />
      <div className="tag-container">
        {coffe.tags.map((tag) => (
          <Tag key={`${coffe.id}${tag}`}>{tag}</Tag>
        ))}
      </div>
      <main>
        <strong>{coffe.name}</strong>
        <p>{coffe.description}</p>
      </main>

      <PriceContainer>
        <span>
          R$ <strong>{formatedPrice}</strong>
        </span>
        <div className="input-buy-container">
          <InputContainer>
            <Minus
              className="decrement"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((state) => state - 1)
                }
              }}
            />
            <input
              ref={inputRef}
              value={quantity}
              type="number"
              min="1"
              max="99"
              defaultValue={1}
              onChange={(event) => setQuantity(event.target.valueAsNumber)}
            />
            <Plus
              className="increment"
              onClick={() => setQuantity((state) => state + 1)}
            />
          </InputContainer>
          <BuyCoffe onClick={() => handleAddProductToCart(coffe)}>
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </BuyCoffe>
        </div>
      </PriceContainer>
    </Coffe>
  )
}
