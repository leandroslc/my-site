import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 24px 80px 24px;
  margin: 0 auto;

  @media (min-width: ${sizes.small}) {
    max-width: 768px;
  }

  @media (min-width: ${sizes.medium}) {
    max-width: 992px;
  }
`

export const Title = styled.h1`
  display: block;
  align-self: flex-start;
  margin-bottom: 12px;
  font-size: 1.5rem;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    height: 4px;
    background-color: ${vars.theme((theme) => theme.elements.emphasys)};
    border-radius: 4px;
    transform: rotate(-1.2deg);
  }
`

export const Description = styled.p`
  display: block;
  margin-bottom: 12px;

  @media (min-width: ${sizes.small}) {
    max-width: 50%;
  }
`

export const Posts = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  row-gap: 60px;
  column-gap: 90px;
  padding: 40px 20px 80px 20px;
`
