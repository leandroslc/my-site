import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Svg = styled.svg`
  color: ${vars.theme((theme) => theme.main.back)};
`
