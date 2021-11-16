import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html, body, #root {
    background: var(--primary);
    display: flex;
    justify-content: center;
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 16px;
  }

  *, button, input {
    border: 0;
    font-family: Asap, sans-serif
  }
  :root {
    --primary: #071251;
    --white: #ffffff;
    --orange: #ff7300;
    --background-white: #f1f2f6;
    --blue: #009fdd;
  }
`
