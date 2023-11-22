import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;
`

export const IconContainer = styled.div`
  display: block;
  padding: 16px;
  border: 2px solid ${vars.theme((theme) => theme.body.text)};
  border-radius: 50%;
`

export const Icon = styled.svg`
  color: ${vars.theme((theme) => theme.body.text)};
  font-size: 2.6rem;
`

export const Text = styled.p`
  font-size: 0.9rem;
`
