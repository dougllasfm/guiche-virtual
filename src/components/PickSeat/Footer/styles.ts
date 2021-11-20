import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: #f1f2f6;
  border-top: 1px solid #dbdbdb;
  box-shadow: 0 1px 3px black;
`

export const AcentSelected = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary);

  > span + span {
    font-weight: bold;
  }
`
export const Options = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > div {
      width: 32px;
      height: 32px;
      border-radius: 5px;
    }

    .disponivel {
      border: 1px solid #8a8c99;
    }

    .selecionado {
      background: var(--orange);
      border: 1px solid var(--orange);
    }

    .ocupado {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e0e0e0;
      color: #8a8c89;
      border: 1px solid #e0e0e0;
    }

    > span {
      margin-top: 5px;
      font-size: 12px;
    }
  }

  div + div {
    margin-left: 40px;
  }
`
export const Button = styled.button`
  padding: 12px 25px;
  border-radius: 3px;
  background: var(--orange);
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #ff811a;
    transition: 0.1s;
  }
`
