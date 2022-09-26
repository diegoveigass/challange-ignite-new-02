import styled from 'styled-components'

export const CoffesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  padding: 0 8rem;

  h1 {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3rem;
    margin-bottom: 2rem;
  }
`
