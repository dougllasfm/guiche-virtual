import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40px;

  margin: 0 130px;
  height: 110px;
  border-radius: 5px;
  padding: 24px 16px;

  box-shadow: 0 4px 8px rgb(0, 0, 0, 24%);
  border-color: #fff;
  background: #fff;

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
`
