import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const Hero = styled.div`
  display: grid;
  align-items: flex-start;
  justify-items: center;
  gap: 16px;
  grid-template-columns: 1fr;
  margin-bottom: 40px;

  @media (min-width: ${sizes.small}) {
    grid-template-columns: 3fr 2fr;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 1.2rem;
`

export const Portrait = styled.img`
  max-width: 281px;
`

export const Emphasys = styled.span`
  display: inline-block;
  padding: 4px 8px;
  vertical-align: bottom;
  background-color: ${vars.theme((theme) => theme.elements.emphasys30)};
  border-radius: 4px;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  gap: 6px;
  color: ${vars.theme((theme) => theme.body.text)};
  text-decoration: none;
  background-color: ${vars.theme((theme) => theme.body.back)};
  border: 2px solid ${vars.theme((theme) => theme.body.text)};
  border-radius: 9999px;
  transition:
    color 0.1s,
    background-color 0.1s;

  &:hover,
  &:focus {
    color: ${vars.theme((theme) => theme.body.back)};
    background-color: ${vars.theme((theme) => theme.body.text)};
    transition:
      color 0.1s,
      background-color 0.1s;
  }
`
