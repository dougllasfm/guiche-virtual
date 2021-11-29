import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  &.visible {
    display: block;
  }

  .close {
    position: fixed;
    right: 365px;
    top: 85px;

    background: #fff;
    color: #000;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid #dbdbdb;

    border-radius: 50%;
    padding: 8px 12px;
    font-size: 16px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fefefe;
  margin: auto;
  padding: 35px;
  border: 1px solid #888;
  width: 45%;

  border-radius: 3px;

  h2 {
    color: var(--primary);
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }

  input {
    background: #fff;
    border: 1px solid var(--primary);
    border-radius: 3px;
    padding: 10px;
    color: #000;
    margin-bottom: 8px;
    width: 50%;
  }

  .submit {
    width: 50%;
    background: var(--orange);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
`
