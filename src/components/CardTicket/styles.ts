import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--white);
  margin: 10px auto;
  padding: 30px 18px;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
  color: var(--primary);

  @media (max-width: 790px) {
    flex-direction: column;
  }
`

export const Company = styled.div`
  @media (max-width: 790px) {
    display: none;
  }
`

export const Schedules = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .current {
    > h2,
    h5 {
      font-size: 14px;
    }
  }

  .destiny {
    > h2,
    h5 {
      font-size: 14px;
    }
  }

  .fio {
    margin: 0 3px;
    width: 120px;
    border: 1px solid black;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 790px) {
    justify-content: center;
    width: 100%;
    .fio {
      width: 70%;
    }
    order: -1;
  }
`

export const Confirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

  @media (max-width: 790px) {
    display: none;
  }
`
export const ConfirmDevice = styled.div`
  display: none;
  width: 95%;
  margin-top: 30px;
  @media (max-width: 790px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
    }

    .confirm {
      display: flex;
      align-items: center;
      text-align: center;

      > button {
        margin-top: 5px;
        background: var(--orange);
        padding: 5px 20px;
        color: #fff;
        border-radius: 3px;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
`
