import Nav from '../../components/Nav'
import Form from '../../components/Form'
import CardTicket from '../../components/CardTicket'

import { Main } from './styles'

const BuyTickets = function BuyTickets() {
  return (
    <>
      <Nav />
      <Form />
      <Main>
        <CardTicket />
        <CardTicket />
        <CardTicket />
        <CardTicket />
      </Main>
    </>
  )
}

export default BuyTickets
