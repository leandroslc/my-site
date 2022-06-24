import styled from 'styled-components'

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 14rem;
  padding: 4px 0;
  color: ${({ theme }) => theme.dropdown.menu.text};
  background-color: ${({ theme }) => theme.dropdown.menu.back};
  border-radius: 6px;
  box-shadow: 0 0 0 0 ${({ theme }) => theme.dropdown.menu.shadowRing},
    0 10px 15px -3px ${({ theme }) => theme.dropdown.menu.shadow},
    0 4px 6px -4px ${({ theme }) => theme.dropdown.menu.shadow};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 0.925rem;
  font-weight: 500;
  color: ${({ theme }) => theme.dropdown.button.text};
  background-color: ${({ theme }) => theme.dropdown.button.back};
  border-radius: 6px;
  box-shadow: 0 0 ${({ theme }) => theme.dropdown.button.shadow},
    0 0 ${({ theme }) => theme.dropdown.button.shadowRing},
    0 1px 2px 0 ${({ theme }) => theme.dropdown.button.shadow};
`

export const ButtonChevron = styled.svg`
  margin-left: 0.5rem;
`
