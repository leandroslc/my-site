import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  user-select: none;
`

export const IconContainer = styled.div`
  position: relative;
  display: block;
  padding: 16px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${vars.theme((theme) => theme.posts.noResults.back)};
    border-radius: 10px;
    transform: rotate(70deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: 3px solid ${vars.theme((theme) => theme.posts.noResults.back)};
    border-radius: 10px;
    transform: rotate(41deg);
  }
`

export const Icon = styled.svg`
  color: ${vars.theme((theme) => theme.body.text)};
  font-size: 3.4rem;
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
