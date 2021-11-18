import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--white);
  margin: 0 130px 10px;
  padding: 30px 18px;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
`

export const Company = styled.div``

export const Schedules = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Confirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: bold;
  }

  button {
    margin-left: 25px;
    background: var(--orange);
    padding: 10px 30px;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`
