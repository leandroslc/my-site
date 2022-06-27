import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const Content = styled.section`
  padding: 16px;
  margin: 0 auto;

  @media (min-width: ${sizes.small}) {
    max-width: 768px;
  }
`

export const Posts = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  row-gap: 30px;
  column-gap: 90px;
`

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img``

export const Title = styled.h1``

export const Date = styled.time``

export const Description = styled.span``
