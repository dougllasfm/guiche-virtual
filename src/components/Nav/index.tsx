/* eslint-disable react/button-has-type */
import { useState } from 'react'
import ModalLogin from '../ModalLogin'
import { Container, NavBar } from './styles'

const Nav = function Nav() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <h1>
        <a href="/">LOGO</a>
      </h1>
      <NavBar>
        <span>Atendimento</span>
        <button onClick={() => setOpenModal(true)}>Faça seu login</button>
        {openModal && (
          <ModalLogin statusModal={openModal} setOpenModal={setOpenModal} />
        )}
      </NavBar>
    </Container>
  )
}

export default Nav
