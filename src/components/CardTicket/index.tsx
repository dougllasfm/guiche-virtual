/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router-dom'
import { Container, Company, Schedules, Confirm, ConfirmDevice } from './styles'

const CardTicket = function CardTicket() {
  const navigate = useNavigate()

  function scaleSelected() {
    navigate('/escolher-poltrona')
  }

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
        <div className="fio" />
        <div className="destiny">
          <h2>17:00</h2>
          <h5>Barra do garças - MT</h5>
        </div>
      </Schedules>
      <Confirm>
        <strong>R$ 80,00</strong>
        <button onClick={scaleSelected}>Selecionar</button>
      </Confirm>
      <ConfirmDevice>
        <div className="company">
          <p>logo</p>
          <span>Rio Novo</span>
        </div>
        <div className="confirm">
          <strong>R$ 80,00</strong>
          <button onClick={scaleSelected}>Selecionar</button>
        </div>
      </ConfirmDevice>
    </Container>
  )
}

export default CardTicket
