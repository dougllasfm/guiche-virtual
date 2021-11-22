/* eslint-disable react/no-unstable-nested-components */
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AcentContext } from '../../../contexts/AcentContext'
import { Container, AcentSelected, Options, Button } from './styles'

const Footer = function Footer() {
  const { acents } = useContext(AcentContext)
  const navigate = useNavigate()
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
      <Button
        onClick={() => {
          navigate('/comprovante')
        }}
      >
        Confirmar reserva
      </Button>
    </Container>
  )
}

export default Footer
