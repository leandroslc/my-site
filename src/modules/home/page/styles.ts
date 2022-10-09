import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const Content = styled.section`
  padding: 30px 16px 16px 16px;
  margin: 0 auto;

  @media (min-width: ${sizes.small}) {
    max-width: 768px;
  }

  @media (min-width: ${sizes.medium}) {
    max-width: 992px;
  }
`

export const IntroText = styled.p`
  display: block;
  width: 100%;
  margin: 0;
  font-size: 1.2rem;
`

export const Hi = styled(IntroText)`
  font-size: 1.6rem;
`

export const Posts = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  row-gap: 60px;
  column-gap: 90px;
  padding: 40px 0 80px 0;
`
