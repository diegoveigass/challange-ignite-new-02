import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2rem 10rem;
`

export const CheckoutForm = styled.form`
  display: flex;
  gap: 1rem;
`

export const CompleteYourOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;

  h1 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
  }
`

export const CompleteYourOrder = styled.main`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;

  gap: 1rem;
  border-radius: 6px;

  padding: 2.5rem;

  .delivery-address,
  .payment-options {
    display: flex;
    gap: 0.5rem;

    > div {
      p {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
      }
      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  .delivery-address > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .payment-options {
    > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  .inputs-container {
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 0.5rem;
    grid-template-areas:
      'c . .'
      'r r r'
      'n comp comp'
      'b cid uf';

    input {
      width: 100%;
      background-color: ${(props) => props.theme['base-button']};
      border: 0;
      padding: 0.75rem;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
        font-weight: 400;
        font-size: 0.875rem;
      }
    }

    .cep {
      grid-area: c;
    }

    .address {
      grid-area: r;
    }

    .number {
      grid-area: n;
    }
    .complement {
      grid-area: comp;
    }

    .neighborhood {
      grid-area: b;
    }

    .city {
      grid-area: cid;
    }

    .uf {
      grid-area: uf;
    }
  }

  .payment-options-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const CoffesSelectedContainer = styled.div`
  width: 50%;
  h1 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
  }
`

export const CoffesSelected = styled.aside`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.188rem;
    padding: 1rem;

    gap: 0.5rem;
    width: 100%;

    background-color: ${(props) => props.theme['base-button']};
    outline: 0;
    cursor: pointer;
    border: 0;
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme.purple};
    }
    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.75rem;
    }
  }
`
