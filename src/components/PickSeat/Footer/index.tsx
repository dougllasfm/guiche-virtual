import { useEffect } from 'react'
import useAddAcent from '../../../hooks/useAddAcent'
import { Container, AcentSelected, Options, Button } from './styles'

const Footer = function Footer() {
  const { ArrayAcents } = useAddAcent()
  useEffect(() => {
    console.log(ArrayAcents)
  }, ArrayAcents)
  return (
    <Container>
      <AcentSelected>
        <span>Poltronas selecionadas</span>
        <span>{ArrayAcents[0]}</span>
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
      <Button>Confirmar</Button>
    </Container>
  )
}

export default Footer
