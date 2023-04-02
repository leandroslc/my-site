import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  margin-bottom: -1px;
  overflow: hidden;
`

export const Border = styled.svg`
  color: ${vars.theme((theme) => theme.footer.back)};
  transform: scaleX(-1) scaleY(0.8) translateY(6px);
`
