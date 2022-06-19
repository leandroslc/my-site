import styled from 'styled-components'

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.dropdown.menu.back};
  border: 0.06rem solid ${({ theme }) => theme.dropdown.menu.border};
  border-radius: 0.4rem;
  padding: 0.8rem;
  box-shadow: 0 0 0 0 ${({ theme }) => theme.dropdown.menu.shadowRing},
    0 10px 15px -3px ${({ theme }) => theme.dropdown.menu.shadow},
    0 4px 6px -4px ${({ theme }) => theme.dropdown.menu.shadow};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.925rem;
  font-weight: 500;
  color: ${({ theme }) => theme.dropdown.button.text};
  background-color: ${({ theme }) => theme.dropdown.button.back};
  border: 0.06rem solid ${({ theme }) => theme.dropdown.button.border};
  border-radius: 0.375rem;
  box-shadow: 0 0 ${({ theme }) => theme.dropdown.button.shadow},
    0 0 ${({ theme }) => theme.dropdown.button.shadowRing},
    0 0.06rem 0.1rem 0 ${({ theme }) => theme.dropdown.button.shadow};
`
