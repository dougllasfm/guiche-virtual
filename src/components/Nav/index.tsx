/* eslint-disable react/button-has-type */
import { useContext, useState } from 'react'
import { AcentContext } from '../../contexts/AcentContext'
import ModalLogin from '../ModalLogin'
import { Container, NavBar } from './styles'

const Nav = function Nav() {
  const { acents } = useContext(AcentContext)
  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <h1>
        <a href="/">LOGO</a>
      </h1>
      <NavBar>
        <button onClick={() => setOpenModal(true)}>Faça seu login</button>
        {openModal && (
          <ModalLogin statusModal={openModal} setOpenModal={setOpenModal} />
        )}
        <div className="price">R$ {acents.length * 80.0}</div>
      </NavBar>
    </Container>
  )
}

export default Nav
