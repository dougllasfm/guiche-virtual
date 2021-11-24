import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
  .acents {
    display: flex;
    flex-direction: column;
    border: 1px solid #8a8c99;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    padding: 10px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 8px 4px;
    }

    .fileira3 {
      margin-top: 25px;
    }
    .fileira4 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 550px) {
    transform: rotate(90deg);
    margin-top: 125px;

    .acents {
      border-top-left-radius: 5%;
      border-bottom-left-radius: 5%;
      padding: 4px;

      > div {
        margin: 0 6px 5px;
      }
    }
  }
`
