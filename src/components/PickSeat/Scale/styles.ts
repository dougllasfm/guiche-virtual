import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
  }

  .rota {
    margin-left: 100px;

    ul,
    li,
    span {
      margin-left: 10px;
    }

    ul {
      li + li {
        margin-top: 20px;
      }
    }
  }

  .price {
    margin-left: 400px;
    font-size: 24px;
    font-weight: bold;
    color: var(--primary);
  }
`
