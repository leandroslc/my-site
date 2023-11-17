import Link from 'next/link'
import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Icon = styled.svg`
  position: relative;
  left: 2px;
  transition: left 0.4s ease-in-out;
`

export const ButtonLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  color: ${vars.theme((theme) => theme.body.text)};
  overflow: hidden;
  background-color: ${vars.theme((theme) => theme.body.contrast)};
  border-radius: 9999px;
  transition:
    color 0.2s,
    background-color 0.2s;

  &:hover,
  &:focus {
    color: ${vars.theme((theme) => theme.body.back)};
    background-color: ${vars.theme((theme) => theme.body.text)};

    & ${Icon} {
      left: 0;
    }
  }
`

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 6px;
  font-size: 1.2em;
  outline: 3px solid ${vars.theme((theme) => theme.body.back)};
  border-radius: 9999px;
`

export const Text = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 12px 4px 8px;
`
