import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Coffes } from './components/Coffes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Hero />
      <Coffes />

      <GlobalStyle />
    </ThemeProvider>
  )
}
