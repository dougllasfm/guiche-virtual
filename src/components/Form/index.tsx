/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { Container } from './styles'

const Form = function Form() {
  return (
    <Container>
      <input type="text" placeholder="Saindo de onde?" />
      <input type="text" placeholder="Indo para onde?" />
      <input type="date" />
      <input type="date" />
      <button>
        <a href="/comprar-passagem">Procurar passagens</a>
      </button>
    </Container>
  )
}

export default Form
