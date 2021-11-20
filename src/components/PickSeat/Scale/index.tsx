import { Container } from './styles'

const Scale = function Scale() {
  return (
    <Container>
      <div>
        <span>Convencional</span>
        <b>Logo</b>
        <span>Rio novo</span>
      </div>
      <div className="rota">
        <ul>
          <li>
            <b>22:15</b>
            <span>Querência - MT</span>
          </li>
          <li>
            <b>05:15</b>
            <span>Barra do Garças</span>
          </li>
        </ul>
      </div>
      <div className="price">R$ 80,00</div>
    </Container>
  )
}

export default Scale
