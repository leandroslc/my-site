import styled, { css } from 'styled-components'
import { vars } from '@/src/theme'

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
    color: ${vars.theme((theme) => theme.dropdown.item.textHover)};
    background-color: ${vars.theme((theme) => theme.dropdown.item.backHover)};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${vars.theme((theme) => theme.dropdown.item.textActive)};
      background-color: ${vars.theme(
        (theme) => theme.dropdown.item.backActive
      )};

      &:hover,
      &:focus {
        color: ${vars.theme((theme) => theme.dropdown.item.textActive)};
        background-color: ${vars.theme(
          (theme) => theme.dropdown.item.backActive
        )};
      }
    `}
`
