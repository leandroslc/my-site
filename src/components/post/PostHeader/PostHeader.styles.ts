import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 30px 0 20px 0;
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
