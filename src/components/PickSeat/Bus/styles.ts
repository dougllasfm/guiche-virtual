import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;

  .acents {
    display: flex;
    flex-direction: column;
    border: 1px solid #8a8c99;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    padding: 16px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 25px 5px;
    }

    .fileira3 {
      margin-top: 25px;
    }
    .fileira4 {
      margin-bottom: 0;
    }
  }
`
