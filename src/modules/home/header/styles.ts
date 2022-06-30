import styled from 'styled-components'
import { sizes } from '@/src/theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: calc(-1 * (24px + 1rem));
  font-size: 1.4rem;
  color: ${({ theme }) => theme.header.text};

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
  width: 80vw;
  height: auto;
  margin-top: 30px;
  pointer-events: none;
  user-select: none;
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
