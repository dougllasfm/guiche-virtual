import styled from 'styled-components'

export const Container = styled.div`
  background: var(--input);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 25px 5px;
  width: 100%;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
  padding: 24px 8px;
  background: #fff;
`

export const Scale = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    margin-right: 100px;
  }
`

export const Bus = styled.div`
  margin-top: 30px;

  .acents {
    display: flex;
    flex-direction: column;
    border: 1px solid #8a8c99;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    padding: 16px;

    div {
      margin: 0 25px 20px;

      label {
        padding: 5px 7px;
        margin-right: 5px;
        border-radius: 5px;
        user-select: none;
      }

      .not-reserved {
        cursor: pointer;
        background: #fff;
        color: #8a8c89;
        border: 1px solid #8a8c99;
      }

      .reserved {
        background: #e0e0e0;
        color: #8a8c89;
        border: 1px solid #e0e0e0;
      }

      .selected {
        background: var(--orange);
        border: 1px solid var(--orange);
        color: #fff;
        cursor: pointer;
        text-decoration: none;
      }
    }

    .fileira3 {
      margin-top: 25px;
    }
    .fileira4 {
      margin-bottom: 0;
    }
  }
`
