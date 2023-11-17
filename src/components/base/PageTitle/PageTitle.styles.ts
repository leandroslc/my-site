import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Title = styled.h1`
  margin: 0 16px 16px 16px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
`

export const TitleText = styled.span`
  background-image: linear-gradient(
    to right,
    ${vars.theme((theme) => theme.elements.emphasys30)} 0%,
    ${vars.theme((theme) => theme.elements.emphasys30)} 100%
  );
  background-repeat: repeat-x;
  background-position-x: 4px, 0, 100%;
  background-position-y: calc(100% - 3px);
  background-size:
    100% 12px,
    auto 4px,
    auto 4px;
`
