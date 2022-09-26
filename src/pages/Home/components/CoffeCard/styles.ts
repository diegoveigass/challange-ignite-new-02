import styled from 'styled-components'

export const Coffe = styled.li`
  height: 20rem;
  width: 16rem;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    margin-top: -3.25rem;
  }

  .tag-container {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0 1.25rem;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.875rem;
      text-align: center;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  font-weight: 700;
  border-radius: 100px;

  text-transform: uppercase;
  font-size: 0.675rem;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .input-buy-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  gap: 1.5rem;

  margin-top: 2rem;

  span {
    font-size: 0.875rem;
    display: flex;
    align-items: baseline;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }
`

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 4rem;
    height: 2.375rem;
    text-align: center;
    border-radius: 6px;
    padding: 1rem;
    border: 0;
    background-color: ${(props) => props.theme['base-input']};
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .decrement,
  .increment {
    position: absolute;
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }

  .decrement {
    bottom: 30%;
    left: 5%;
  }

  .increment {
    bottom: 30%;
    right: 5%;
  }
`

export const BuyCoffe = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  border-radius: 8px;
  border: none;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
