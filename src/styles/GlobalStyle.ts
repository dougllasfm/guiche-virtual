import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: var(--white);
    min-height: 100%;
  }


  *, button, input {
    border: 0;
    font-family: Asap,sans-serif;
  }
  :root {
    --primary: #071251;
    --white: #ffffff;
    --orange: #ff7300;
    --background-white: #f1f2f6;
    --blue: #009fdd;
    --input: #e6f2ff;
  }
`
