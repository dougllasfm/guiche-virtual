/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import Nav from '../../components/Nav'

import { Container, Header, Main, Scale, Bus } from './styles'

const PickSeat = function PickSeat() {
  const [statusAcents, setStatusAcents] = useState(0)

  return (
    <Container>
      <Nav />
      <Header>Ida para Barra do Garças</Header>
      <Main>
        <Scale>
          <div>
            <span>Convencional</span>
            <b>Logo</b>
            <span>Rio novo</span>
          </div>
          <div>
            <ul>
              <li>
                <b>22:15</b>
                <span>Querência - MT</span>
              </li>
              <li>Escala</li>
              <li>
                <b>5:15</b>
                <span>Barra do Garças</span>
              </li>
            </ul>
          </div>
        </Scale>
        <Bus>
          <div className="acents">
            <div className="fileira1" />
            <div className="fileira2" />
            <div className="fileira3" />
            <div className="fileira4" />
          </div>
        </Bus>
      </Main>
    </Container>
  )
}

export default PickSeat
