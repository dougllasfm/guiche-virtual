import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;

  height: 100vh;

  > h1 {
    font-size: 24px;
  }

  .informations-person {
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
