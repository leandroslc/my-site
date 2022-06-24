import styled, { css } from 'styled-components'

export const Item = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 16px;
  font-size: 0.925rem;

  & + & {
    margin-top: 4px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.dropdown.item.textHover};
    background-color: ${({ theme }) => theme.dropdown.item.backHover};
  }

  ${({ theme, $isActive }) =>
    $isActive &&
    css`
      color: ${theme.dropdown.item.textActive};
      background-color: ${theme.dropdown.item.backActive};

      &:hover,
      &:focus {
        color: ${theme.dropdown.item.textActive};
        background-color: ${({ theme }) => theme.dropdown.item.backActive};
      }
    `}
`
