import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  width: auto;
  padding: 6px 12px;

  ::after {
    content: '';
    position: absolute;
    right: 12px;
    bottom: 0;
    display: block;
    width: calc(86% - 26px);
    height: 1px;
    background-color: ${vars.theme((theme) => theme.post.backToHome.border)};
    transition: width 0.1s;
  }

  &:hover,
  &:focus {
    column-gap: 8px;

    &:first-child {
      margin-left: -4px;
    }

    ::after {
      width: calc(100% - 28px);
      transition: width 0.1s;
    }
  }
`
