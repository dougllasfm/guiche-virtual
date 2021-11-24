import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40px;

  width: 90%;
  max-width: 980px;
  margin: auto;
  border-radius: 5px;
  padding: 24px 16px;

  box-shadow: 0 4px 8px rgb(0, 0, 0, 24%);
  border-color: #fff;
  background: #fff;

  div {
    display: flex;
  }

  input {
    padding: 10px;
    height: 45px;
    margin-right: 15px;
    background-color: var(--input);
    color: var(--primary);
    border: 0;
    outline: none;
    border-radius: 3px;

    &:focus {
      outline: 1px solid var(--primary);
    }
  }

  button {
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    height: 48px;
    width: 22%;
    color: var(--white);
    background-color: var(--orange);
    padding: 3px 6px;
    border-radius: 3px;
  }

  @media (max-width: 1048px) {
    flex-direction: column;
    width: 80%;

    top: 80px;
    button {
      margin-top: 8px;
      width: 100%;
      padding: 10px 0;
    }
  }

  @media (max-width: 925px) {
    top: 140px;
    div {
      display: block;
      width: 100%;
    }
    input {
      margin: 3px 0;
      width: 100%;
    }
  }
`
