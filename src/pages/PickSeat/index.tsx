/* eslint-disable no-octal */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Nav from '../../components/Nav'
import Scale from '../../components/PickSeat/Scale'
import Bus from '../../components/PickSeat/Bus'
import Footer from '../../components/PickSeat/Footer'

import { Container, Header, Main } from './styles'

const PickSeat = function PickSeat() {
  return (
    <Container>
      <Nav />
      <Header>Ida para Barra do Garças</Header>
      <Main>
        <Scale />
        <Bus />
      </Main>
      <Footer />
    </Container>
  )
}

export default PickSeat
