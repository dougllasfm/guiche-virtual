import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary);
  width: 100%;

  margin-bottom: 100px;
`

export const Wrapper = styled.div`
  padding: 16px;
`

export const Title = styled.div`
  margin: 80px 140px 0;
  width: 100%;

  h1 {
    color: var(--blue);
    font-size: 40px;
    margin-top: 24px;
    font-weight: bold;
  }
  p {
    color: var(--blue);
    font-size: 20px;
    font-weight: 700;
    margin-top: 8px;
  }
`
