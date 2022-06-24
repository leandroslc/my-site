import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
`

export const Header = styled.header`
  background: ${({ theme }) => theme.header.back};
`

export const Main = styled.main`
  background: ${({ theme }) => theme.main.back};
`
