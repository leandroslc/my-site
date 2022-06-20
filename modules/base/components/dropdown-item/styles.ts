import styled, { css } from 'styled-components'

export const Item = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: 0.4rem 1rem;
  font-size: 0.925rem;

  & + & {
    margin-top: 0.2rem;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.dropdown.item.backHover};
  }

  ${({ theme, $isActive }) =>
    $isActive &&
    css`
      background-color: ${theme.dropdown.item.backActive};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.dropdown.item.backActive};
      }
    `}
`
