import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 30px 0 28px 0;
`

export const Title = styled.h1`
  margin: 0 16px 0 16px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  max-height: 16rem;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 8px;
`

export const Image = styled.img`
  height: auto;
  width: 100%;
`

export const Date = styled.time`
  margin: 0 16px 12px 16px;
  font-size: 0.95rem;
`
