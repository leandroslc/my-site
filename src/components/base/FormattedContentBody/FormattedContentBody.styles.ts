import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.main`
  padding: 0 32px 0 32px;
  line-height: 1.625;

  p {
    margin-bottom: 16px;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 16px;
    font-size: 1.5em;
    font-weight: 600;
  }

  h3 {
    margin-top: 30px;
    margin-bottom: 16px;
    font-size: 1.25em;
    font-weight: 600;
  }

  ul {
    list-style: disc;
    margin-bottom: 16px;
    padding-left: 40px;
  }

  a {
    position: relative;
    display: inline-block;
    color: ${vars.theme((theme) => theme.elements.link)};

    &::after {
      position: absolute;
      bottom: 0;
      content: '';
      display: block;
      width: 100%;
      height: 0.5px;
      background-color: ${vars.theme((theme) => theme.elements.link)};
    }
  }
`
