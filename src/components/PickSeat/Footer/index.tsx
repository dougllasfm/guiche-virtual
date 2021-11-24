/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unstable-nested-components */
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AcentContext } from '../../../contexts/AcentContext'
import { Container, AcentSelected, Options, Button } from './styles'

const Footer = function Footer() {
  const { acents, listReserveds } = useContext(AcentContext)
  const navigate = useNavigate()

  function confirmationReserve() {
    acents.forEach(element => {
      listReserveds(element)
    })
    navigate('/comprovante')
  }

  return (
    <Container>
      <AcentSelected>
        <span>Poltronas selecionadas</span>
        <span>{`${acents}`}</span>
      </AcentSelected>
      <Options>
        <div>
          <div className="disponivel" />
          <span>Disponivel</span>
        </div>
        <div>
          <div className="selecionado" />
          <span>Selecionado</span>
        </div>
        <div>
          <div className="ocupado">X</div>
          <span>Ocupado</span>
        </div>
      </Options>
      <Button onClick={confirmationReserve}>Confirmar reserva</Button>
    </Container>
  )
}

export default Footer
