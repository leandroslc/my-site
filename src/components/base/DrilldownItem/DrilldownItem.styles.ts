import styled from 'styled-components'
import { vars } from '@/src/theme'

export const ItemLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`

export const ItemLabelChevron = styled.svg`
  margin-left: auto;
`

export const BackButtonIcon = styled.svg`
  margin-right: 4px;
`

export const Divider = styled.div`
  display: block;
  margin: 6px 40% 6px 40%;
  width: auto;
  height: 1px;
  opacity: 0.4;
  background-color: ${vars.theme((theme) => theme.dropdown.menu.text)};
`

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px 6px;
  visibility: hidden;
  color: ${vars.theme((theme) => theme.dropdown.menu.text)};
  background-color: ${vars.theme((theme) => theme.dropdown.menu.backFull)};
  transition: transform 0.1s ease-out, z-index 0.1s ease-out;
  animation: hide 0.1s ease-out;

  &.is-open {
    visibility: visible;
    z-index: 3;
    transform: translate(-100%);
    animation: show 0.1s ease-out;
  }

  @keyframes show {
    0% {
      z-index: -1;
      transform: translate(0);
    }
    100% {
      z-index: 3;
      transform: translate(-100%);
    }
  }

  @keyframes hide {
    0% {
      z-index: 3;
      transform: translate(-100%);
      visibility: visible;
    }
    100% {
      z-index: -1;
      transform: translate(0);
      visibility: hidden;
    }
  }
`
