import styled from 'styled-components'
import Link from 'next/link'
import { vars } from '@/src/theme'

export const HomeLink = styled(Link)`
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 20px;
  color: ${vars.theme((theme) => theme.body.text)};
  border: 2px solid ${vars.theme((theme) => theme.body.text)};
  border-radius: 9999px;
  transition: background-color 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: ${vars.theme((theme) => theme.body.back)};
    background-color: ${vars.theme((theme) => theme.body.text)};
  }
`

export const Icon = styled.svg`
  font-size: 1.8em;
`
