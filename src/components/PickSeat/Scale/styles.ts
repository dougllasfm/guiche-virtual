import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 980px;

  > div {
    display: flex;
    flex-direction: column;
  }

  .rota {
    ul,
    li,
    span {
      margin-left: 5px;
    }

    ul {
      li + li {
        margin-top: 10px;
      }
    }
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary);
    width: 15%;
  }

  @media (max-width: 550px) {
    font-size: 14px;

    .price {
      display: none;
    }
  }
`
