import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header``

export const Image = styled.img`
  width: auto;
  margin-bottom: 10px;
  border-radius: 8px;

  @media (min-width: ${sizes.small}) {
    min-height: 10rem;
  }

  @media (min-width: ${sizes.medium}) {
    min-height: 14rem;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 6px;
`

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 1.5rem;
  font-weight: bold;
`

export const Date = styled.time`
  margin-bottom: 16px;
  font-size: 0.9rem;
`

export const Description = styled.span``
