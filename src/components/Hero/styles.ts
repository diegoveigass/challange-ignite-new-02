import styled from 'styled-components'

const BACKGROUND_COLOR = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  purple: 'purple',
} as const

export interface BackgroundColorProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR
}

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 0 10rem;
  height: 34rem;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 36.75rem;
    gap: 4.125rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.3;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const QualityContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  width: 35.438rem;
  row-gap: 1.25rem;
  column-gap: 1.25rem;
`

export const QualityItems = styled.div<BackgroundColorProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    gap: 20rem;
    background-color: ${(props) =>
      props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`
