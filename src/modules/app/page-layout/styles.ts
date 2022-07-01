import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
`

export const Header = styled.header`
  position: relative;
  flex: 0 1 auto;
  background: ${({ theme }) => theme.header.back};
`

export const Main = styled.main`
  flex: 1 1 auto;
  background: ${({ theme }) => theme.main.back};
`
