import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: -20px;
`

export const Title = styled.h1`
  position: fixed;
  top: 16px;
  left: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.4rem;
  color: ${vars.theme((theme) => theme.header.text)};
  pointer-events: none;
  user-select: none;
  opacity: 0;

  @media (min-width: ${sizes.medium}) {
    font-size: 2rem;
  }
`

export const TitleImage = styled.img`
  width: 6em;
  height: auto;
`

export const TitleText = styled.span`
  font-size: 1.4em;
  line-height: 0.8em;
`

export const PaintingImage = styled.img`
  z-index: 1;
  align-self: flex-end;
  width: 48vw;
  height: auto;
  margin-top: 30px;
  pointer-events: none;
  user-select: none;
  filter: ${vars.theme((theme) => theme.header.painting.filter)};
`

export const ContentBorder = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 80vw;
  height: auto;
  margin-bottom: -1px;
`
