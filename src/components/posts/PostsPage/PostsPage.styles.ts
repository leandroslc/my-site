import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px 24px 80px 24px;
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
  grid-template-columns: 1fr;
  row-gap: 60px;
  column-gap: 90px;
  padding: 0px 20px 100px 20px;

  @media (min-width: ${sizes.small}) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  padding: 0 12px;
`

export const NoResultsContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
`
