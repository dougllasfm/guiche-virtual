import { useContext } from 'react'
import { AcentContext } from '../../../contexts/AcentContext'
import { Container } from './styles'

const Scale = function Scale() {
  const { acents } = useContext(AcentContext)

  return (
    <Container>
      <div>
        <b>Logo</b>
        <span>Nome da empresa</span>
      </div>
      <div className="rota">
        <ul>
          <li>
            <b>22:15</b>
            <span>Cidade atual</span>
          </li>
          <li>
            <b>05:15</b>
            <span>Cidade destino</span>
          </li>
        </ul>
      </div>
      <div className="price">R$ {acents.length * 80.0}</div>
    </Container>
  )
}

export default Scale
