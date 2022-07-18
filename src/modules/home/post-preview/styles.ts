import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: auto;
  border-radius: 8px;
  transition: box-shadow 0.1s;

  @media (min-width: ${sizes.small}) {
    min-height: 10rem;
  }

  @media (min-width: ${sizes.medium}) {
    min-height: 14rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 1.5rem;
  font-weight: bold;
`

export const PostLink = styled.a`
  cursor: pointer;
  border-radius: 8px;
  transform: translateY(0);
  transition: transform 0.1s;

  &:focus {
    outline: none;
    box-shadow: none !important;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    transform: translateY(-2px);
    transition: transform 0.1s;

    ${Title} {
      text-decoration: underline;
    }

    ${Image} {
      box-shadow: 0 0 0 3px ${vars.theme((theme) => theme.main.back)},
        0 0 3px 5px ${vars.theme((theme) => theme.postCard.borderHover)};
      transition: box-shadow 0.1s;
    }
  }
`

export const Header = styled.header`
  margin-bottom: 10px;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 6px;
`

export const Date = styled.time`
  margin-bottom: 16px;
  font-size: 0.9rem;
`

export const Description = styled.span``
