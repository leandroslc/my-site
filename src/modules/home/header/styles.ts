import styled, { css } from 'styled-components'
import { isDarkTheme, sizes } from '@/src/theme'

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
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: calc(-1 * (24px + 1rem));
  font-size: 1.4rem;
  color: ${({ theme }) => theme.header.text};
  pointer-events: none;
  user-select: none;

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
  filter: brightness(95%) sepia(12%);

  ${({ theme }) =>
    isDarkTheme(theme) &&
    css`
      filter: brightness(80%) sepia(16%);
    `}
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