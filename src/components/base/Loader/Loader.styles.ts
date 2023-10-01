import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  overflow: hidden;
  background-color: ${vars.theme((theme) => theme.body.back)};

  &.removing {
    opacity: 0;
    transition: opacity 1.2s;
  }

  &.done {
    display: none;
  }
`

export const Spinner = styled.div`
  display: block;
  width: 68px;
  height: 68px;
  border: 4px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    from {
      transform: rotate(-45deg);
    }
    to {
      transform: rotate(315deg);
    }
  }
`
