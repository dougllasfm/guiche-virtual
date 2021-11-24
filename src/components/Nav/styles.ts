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
  > button {
    background: var(--primary);
    cursor: pointer;
    font-size: 16px;
    color: var(--white);
    padding: 10px 14px;
    border-radius: 3px;

    &:hover {
      background: rgb(230, 255, 255, 0.25);
    }
  }

  .price {
    display: none;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  @media (max-width: 550px) {
    > button {
      display: none;
    }

    .price {
      display: flex;
    }
  }
`
