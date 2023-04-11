import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 16px;
`

export const Header = styled.header`
  position: relative;
  flex: 0 1 auto;
  background: ${vars.theme((theme) => theme.header.back)};
`

export const Main = styled.main`
  position: relative;
  flex: 1 1 auto;
  background: ${vars.theme((theme) => theme.main.back)};
`
