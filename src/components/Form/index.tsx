/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

const Form = function Form() {
  const navigate = useNavigate()

  return (
    <Container>
      <input type="text" placeholder="Saindo de onde?" />
      <input type="text" placeholder="Indo para onde?" />
      <input type="date" />
      <input type="date" />
      <button onClick={() => navigate('/comprar-passagem')}>
        Procurar passagens
      </button>
    </Container>
  )
}

export default Form
