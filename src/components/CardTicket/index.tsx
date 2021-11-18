/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router-dom'
import { Container, Company, Schedules, Confirm } from './styles'

const CardTicket = function CardTicket() {
  const navigate = useNavigate()

  return (
    <Container>
      <Company>
        <span>Convencional</span>
        <p>logo</p>
        <span>Rio Novo</span>
      </Company>

      <Schedules>
        <div className="current">
          <h2>8:30</h2>
          <h5>Querência - MT</h5>
        </div>
        <div className="fio">_______________________</div>
        <div className="destiny">
          <h2>17:00</h2>
          <h5>Barra do garças - MT</h5>
        </div>
      </Schedules>
      <Confirm>
        <span>R$ 80,00</span>
        <button onClick={() => navigate('/escolher-poltrona')}>
          Selecionar
        </button>
      </Confirm>
    </Container>
  )
}

export default CardTicket
