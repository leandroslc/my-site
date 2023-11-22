import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
  pointer-events: none;
`

export const IconContainer = styled.div`
  position: relative;
  display: block;
  padding: 16px;
  background-color: ${vars.theme((theme) => theme.posts.noResults.back)};
  border-radius: 50%;
`

export const Icon = styled.svg`
  color: ${vars.theme((theme) => theme.body.text)};
  font-size: 2.6rem;
`

export const AboveIcon = styled.svg`
  position: absolute;
  right: -6px;
  bottom: -4px;
  font-size: 1.6rem;
`

export const Text = styled.p`
  font-size: 0.9rem;
`
