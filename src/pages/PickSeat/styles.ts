import styled from 'styled-components'

export const Container = styled.div`
  background: #f1f2f6;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 25px 5px;
  width: 100%;

  @media (max-width: 550px) {
    display: none;
  }
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: 980px;

  margin: 15px auto;
  padding: 35px 8px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.24);

  @media (max-width: 550px) {
    padding-bottom: 120px;
    margin-bottom: 80px;
  }
`

export const Button = styled.button`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 3px;

  background: var(--orange);
  color: #fff;
  height: 40px;

  @media (max-width: 550px) {
    display: flex;
  }
`
