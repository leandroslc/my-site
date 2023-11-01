import Link from 'next/link'
import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Footer = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: ${vars.theme((theme) => theme.footer.back)};

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: -60px;
    left: 26px;
    width: 25px;
    height: 25px;
    background-color: ${vars.theme((theme) => theme.footer.back)};
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: -30px;
    left: 40px;
    width: 34px;
    height: 34px;
    background-color: ${vars.theme((theme) => theme.footer.back)};
    border-radius: 50%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 14px;
  padding: 14px 25px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-right: 24px;
  color: ${vars.theme((theme) => theme.footer.text)};
  text-decoration: none;

  &:hover,
  &:focus {
    &::after {
      width: 100%;
      transition: width 0.1s;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 74%;
    height: 1px;
    background-color: ${vars.theme((theme) => theme.footer.text)};
    transition: width 0.1s;
  }
`

export const NavSocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 8px;
  color: ${vars.theme((theme) => theme.footer.text)};
  text-decoration: none;
  border: 1px solid ${vars.theme((theme) => theme.footer.text)};
  border-radius: 50%;
  transition: background-color 0.1s;

  &:hover,
  &:focus {
    color: ${vars.theme((theme) => theme.footer.textHover)};
    background-color: ${vars.theme((theme) => theme.footer.text)};
    transition: background-color 0.1s;
  }
`

export const Signature = styled.img`
  width: auto;
  height: 2.6rem;
  margin-left: auto;
  user-select: none;
  pointer-events: none;
`

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  font-size: 0.9rem;
  color: ${vars.theme((theme) => theme.footer.text)};
  border-top: 1px solid ${vars.theme((theme) => theme.footer.divider)};
`
