import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  height: 50px;
  width: 100%;
  box-shadow: 0.5px 0.5px 7px #000;
  h1 {
    color: #fff;
  }
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    font-size: 12px;
  }
`
