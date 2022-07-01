import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const Content = styled.section`
  padding: 16px;
  margin: 0 auto;

  @media (min-width: ${sizes.small}) {
    max-width: 768px;
  }

  @media (min-width: ${sizes.medium}) {
    max-width: 992px;
  }
`

export const Posts = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  row-gap: 90px;
  column-gap: 90px;
  padding: 60px 0 40px 0;
`
