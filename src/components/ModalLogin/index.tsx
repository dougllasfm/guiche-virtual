/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import { Container, Form } from './styles'

type Props = {
  statusModal: boolean
  setOpenModal: any
}

const ModalLogin = function ModalLogin({ statusModal, setOpenModal }: Props) {
  return (
    <Container className={`${statusModal ? 'visible' : ''}`}>
      <button className="close" onClick={() => setOpenModal(false)}>
        X
      </button>
      <Form>
        <h2>
          Faça seu login <strong>na Buson</strong>
        </h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button className="submit" type="submit">
          Entrar
        </button>
      </Form>
    </Container>
  )
}

export default ModalLogin
