import Nav from '../Nav'
import Form from '../Form'
import { Container, Title } from './styles'

const Header = function Header() {
  return (
    <Container>
      <Nav />
      <Title>
        <h1>Passagens de ônibus</h1>
        <p>Todos os destinos em só lugar</p>
      </Title>
      <Form />
    </Container>
  )
}

export default Header
