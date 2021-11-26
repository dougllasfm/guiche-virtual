/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-octal */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AcentContext } from '../../contexts/AcentContext'
import Nav from '../../components/Nav'
import Scale from '../../components/PickSeat/Scale'
import Bus from '../../components/PickSeat/Bus'
import Footer from '../../components/PickSeat/Footer'

import { Container, Header, Main, Button } from './styles'

const PickSeat = function PickSeat() {
  const { listReserveds, acents } = useContext(AcentContext)
  const navigate = useNavigate()

  function confirmationReserve() {
    for (let index = 0; index < acents.length; index += 1) {
      listReserveds(acents[index])
    }
    navigate('/comprovante')
  }
  return (
    <Container>
      <Nav />
      <Header>Ida para Cidade destino</Header>
      <Main>
        <Scale />
        <Bus />
        <Button onClick={confirmationReserve}>Confirmar reserva</Button>
      </Main>
      <Footer />
    </Container>
  )
}

export default PickSeat
