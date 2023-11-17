import styled from 'styled-components'
import { sizes } from '@/src/theme'

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
