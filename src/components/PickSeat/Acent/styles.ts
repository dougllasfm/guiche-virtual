import styled from 'styled-components'

export const Label = styled.label`
  padding: 5px 7px;
  margin-right: 5px;
  border-radius: 5px;
  user-select: none;

  &.not-reserved {
    cursor: pointer;
    background: #fff;
    color: #8a8c89;
    border: 1px solid #8a8c99;
  }

  &.reserved {
    background: #e0e0e0;
    color: #8a8c89;
    border: 1px solid #e0e0e0;
  }

  &.selected {
    background: var(--orange);
    border: 1px solid var(--orange);
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`
