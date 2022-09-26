import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutForm,
  CoffesSelected,
  CompleteYourOrderContainer,
  CompleteYourOrder,
  CoffesSelectedContainer,
  PaymentOptions,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm>
        <CompleteYourOrderContainer>
          <h1>Complete seu pedido</h1>
          <CompleteYourOrder>
            <div className="delivery-address">
              <MapPin size={22} />
              <div>
                <p>Endereço de entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <div className="inputs-container">
              <input className="cep" type="number" placeholder="CEP" />
              <input className="address" type="text" placeholder="Rua" />
              <input className="number" type="text" placeholder="Número" />
              <input
                className="complement"
                type="text"
                placeholder="Complemento"
              />
              <input
                className="neighborhood"
                type="text"
                placeholder="Bairro"
              />
              <input className="city" type="text" placeholder="Cidade" />
              <input className="uf" type="text" placeholder="UF" />
            </div>
            <div className="payment-options-container">
              <div className="payment-options">
                <CurrencyDollar size={22} />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>
              <PaymentOptions>
                <button>
                  <CreditCard />
                  <span>CARTÃO DE CRÉDITO</span>
                </button>
                <button>
                  <Bank />
                  <span>CARTÃO DE DÉBITO</span>
                </button>
                <button>
                  <Money />
                  <span>DINHEIRO</span>
                </button>
              </PaymentOptions>
            </div>
          </CompleteYourOrder>
        </CompleteYourOrderContainer>
        <CoffesSelectedContainer>
          <h1>Cafés selecionados</h1>
          <CoffesSelected>coffes selected</CoffesSelected>
        </CoffesSelectedContainer>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
