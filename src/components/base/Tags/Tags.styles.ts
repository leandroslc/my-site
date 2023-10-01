import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 6px;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  color: ${vars.theme((theme) => theme.post.tag.text)};
  background-color: ${vars.theme((theme) => theme.post.tag.back)};
  border-radius: 7px 0 7px 0;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.4rem;
`
