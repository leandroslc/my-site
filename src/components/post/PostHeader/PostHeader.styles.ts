import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 30px 0 20px 0;
`

export const Title = styled.h1`
  margin: 0 16px 16px 16px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
`

export const TitleText = styled.span`
  background-image: linear-gradient(
    to right,
    ${vars.theme((theme) => theme.elements.emphasys30)} 0%,
    ${vars.theme((theme) => theme.elements.emphasys30)} 100%
  );
  background-repeat: repeat-x;
  background-position-x: 4px, 0, 100%;
  background-position-y: calc(100% - 3px);
  background-size:
    100% 8px,
    auto 4px,
    auto 4px;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  max-height: 16rem;
  margin-bottom: 8px;
  overflow: hidden;
  border-radius: 8px;
`

export const Image = styled.img`
  height: auto;
  width: 100%;
`

export const Date = styled.time`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 16px 16px 16px;
  font-size: 0.95rem;
`

export const TagsContainer = styled.div`
  margin: 0 16px 16px 16px;
`
