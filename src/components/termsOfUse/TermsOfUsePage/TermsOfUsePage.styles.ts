import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const PageContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 16px 80px 16px;
  margin: 0 auto;

  @media (min-width: ${sizes.small}) {
    max-width: 768px;
  }

  @media (min-width: ${sizes.medium}) {
    max-width: 992px;
  }
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 16px;
`

export const Title = styled.h1`
  margin: 0 16px 0 16px;
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
  background-size: 100% 8px, auto 4px, auto 4px;
`
