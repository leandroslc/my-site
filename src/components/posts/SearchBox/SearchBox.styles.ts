import styled from 'styled-components'
import { sizes, vars } from '@/src/theme'

export const SearchBox = styled.div`
  position: relative;
  display: block;
  width: 100%;

  @media (min-width: ${sizes.medium}) {
    width: 70%;
  }
`

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px 20px 16px 56px;
  color: ${vars.theme((theme) => theme.body.text)};
  background-color: ${vars.theme((theme) => theme.posts.search.back)};
  border: 2px solid ${vars.theme((theme) => theme.posts.search.border)};
  border-radius: 9999px;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;

  &::placeholder {
    color: ${vars.theme((theme) => theme.posts.search.placeholder)};
  }

  &:hover,
  &:focus {
    border-color: ${vars.theme((theme) => theme.posts.search.borderHover)};
    box-shadow:
      0 0 0px 1px ${vars.theme((theme) => theme.main.back)},
      0 0 3px 3px ${vars.theme((theme) => theme.posts.search.shadowHover)};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`

export const SearchBoxIcon = styled.input`
  position: absolute;
  top: calc(50% - 0.5em);
  left: 20px;
  font-size: 1.4em;
  color: ${vars.theme((theme) => theme.posts.search.border)};
  pointer-events: none;
`
