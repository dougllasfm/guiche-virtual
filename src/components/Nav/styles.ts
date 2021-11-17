import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 3px rgb(0, 0, 0, 24%);
  background-color: var(--primary);

  h1 {
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    font-size: 12px;
    color: var(--white);
  }
  a {
    font-size: 14px;
    color: var(--white);
  }
  .modal {
    position: fixed;
    top: 80px;
    right: 330px;
    bottom: 80px;
    left: 330px;
    background: #fff;
    z-index: 9999;
    opacity: 0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
  }

  .modal h2,
  p {
    color: #000;
  }

  .modal:target {
    opacity: 1;
    pointer-events: auto;
  }

  .modal > div {
    width: 400px;
    position: relative;
    margin: 10% auto;
    padding: 15px 20px;
    background: #fff;
  }

  .fechar {
    text-decoration: none;
    position: absolute;
    width: 30px;
    right: -15px;
    top: -20px;
    text-align: center;
    line-height: 30px;
    margin-top: 5px;
    background: #fff;
    border-radius: 50%;
    font-size: 16px;
    color: #000;
  }
`
