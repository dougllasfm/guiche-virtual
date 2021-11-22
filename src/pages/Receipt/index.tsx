import { useContext } from 'react'
import Nav from '../../components/Nav'
import { AcentContext } from '../../contexts/AcentContext'
import { Container } from './styles'

const Receipt = function Receipt() {
  const { acents } = useContext(AcentContext)

  return (
    <>
      <Nav />
      <Container>
        <h1>Reserva feita com sucesso</h1>
        <div className="informations-person">
          <strong>Dados</strong>
          <span>Nome: Fulano de tal</span>
          <span>Nº do documento: 9999999-9</span>
        </div>
        <span>
          Poltrona(as) - <strong>{`${acents}`}</strong>
        </span>
        <span>
          Valor total: <strong>R$ {acents.length * 80.0}</strong>
        </span>
      </Container>
    </>
  )
}

export default Receipt
