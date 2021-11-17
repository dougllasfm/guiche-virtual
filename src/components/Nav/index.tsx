import { Container, NavBar } from './styles'

const Nav = function Nav() {
  return (
    <Container>
      <h1>
        <a href="/">LOGO</a>
      </h1>
      <NavBar>
        <span>Atendimento</span>
        <a href="#abrirModal">Faça seu login</a>
        <div id="abrirModal" className="modal">
          <a href="#fechar" title="Fechar" className="fechar">
            X
          </a>
          <h2>Faça seu login</h2>
          <p>Esta é uma simples janela de modal.</p>
          <p>
            Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou
            formulários
          </p>
        </div>
      </NavBar>
    </Container>
  )
}

export default Nav
