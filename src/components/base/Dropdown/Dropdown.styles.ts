import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Menu = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-width: 16rem;
  min-height: 16rem;
  padding: 12px 6px;
  overflow: hidden;
  visibility: hidden;
  color: ${vars.theme((theme) => theme.dropdown.menu.text)};
  background-color: ${vars.theme((theme) => theme.dropdown.menu.back)};
  border: 1px solid ${vars.theme((theme) => theme.dropdown.menu.border)};
  border-radius: 6px;
  box-shadow: 0 0 0 0 ${vars.theme((theme) => theme.dropdown.menu.shadowRing)},
    0 10px 15px -3px ${vars.theme((theme) => theme.dropdown.menu.shadow)},
    0 4px 6px -4px ${vars.theme((theme) => theme.dropdown.menu.shadow)};
  backdrop-filter: blur(4px);
  animation: slide-up 0.2s ease-out;

  &.is-open {
    visibility: visible;
    animation: slide-down 0.2s ease-out;
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      margin-top: -5px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }

  @keyframes slide-up {
    0% {
      margin-top: 0;
      opacity: 1;
      visibility: visible;
    }
    100% {
      margin-top: -5px;
      opacity: 0;
      visibility: hidden;
    }
  }
`

export const Button = styled.button`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 0.925rem;
  font-weight: 500;
  color: ${vars.theme((theme) => theme.dropdown.button.text)};
  background-color: ${vars.theme((theme) => theme.dropdown.button.back)};
  border-radius: 6px;
  box-shadow: 0 0 ${vars.theme((theme) => theme.dropdown.button.shadow)},
    0 0 ${vars.theme((theme) => theme.dropdown.button.shadowRing)},
    0 1px 2px 0 ${vars.theme((theme) => theme.dropdown.button.shadow)};
`

export const ButtonChevron = styled.svg`
  margin-left: 0.5rem;
`
