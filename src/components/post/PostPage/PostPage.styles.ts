import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const PostContainer = styled.article`
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
