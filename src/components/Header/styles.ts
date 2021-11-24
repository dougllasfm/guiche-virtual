import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  width: 100%;

  margin-bottom: 100px;
`

export const Title = styled.div`
  margin: 40px auto;
  width: 80%;

  h1 {
    color: var(--blue);
    font-size: 48px;
    margin-top: 24px;
    font-weight: bold;
  }
  p {
    color: var(--blue);
    font-size: 28px;
    font-weight: 700;
    margin-top: 8px;
  }

  @media (max-width: 925px) {
    margin-bottom: 0;
  }

  @media (max-width: 545px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
  }
`
