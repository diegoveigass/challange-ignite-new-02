import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.background};

  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  border: none;
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    opacity: 0.7;
  }
`
