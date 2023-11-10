import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Posts = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 60px;
  column-gap: 90px;
  margin-top: -60px;
  padding: 0px 20px 100px 20px;

  @media (min-width: ${sizes.small}) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`

export const Section = styled.div`
  display: grid;
  align-items: flex-start;
  justify-items: center;
  gap: 16px;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: 'title' 'description' 'link' 'side';
  margin-bottom: 100px;

  @media (min-width: ${sizes.small}) {
    grid-template-columns: 3fr 3fr;
    grid-template-areas:
      'title side'
      'description side'
      'link side';
  }
`

export const SectionReverse = styled(Section)`
  @media (min-width: ${sizes.small}) {
    grid-template-areas:
      'side title'
      'side description'
      'side link';
  }
`

export const SectionDescription = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-self: start;
`

export const SectionTitle = styled(Title)`
  grid-area: title;
  justify-self: start;
`

export const SectionLink = styled.a`
  grid-area: link;
  justify-self: start;
`

export const SectionSideLink = styled.a`
  grid-area: side;
  align-self: center;
`

export const SectionImage = styled.img`
  grid-area: side;
  max-width: 281px;
`
