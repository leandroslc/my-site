import styled from 'styled-components'
import { vars } from '@/src/theme'

export const Container = styled.main`
  width: 100%;
  padding: 0 32px 0 32px;
  line-height: 1.7;

  p {
    margin-bottom: 20px;
  }

  p > code,
  h2 > code {
    display: inline-block;
    background-color: ${vars.theme((theme) => theme.contentElements.code.back)};
    color: ${vars.theme((theme) => theme.contentElements.code.text)};
    padding: 0 0.3em;
    line-height: 1.5rem;
    font-family: 'fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco,
      Consolas, 'Liberation Mono', 'Courier New', monospace;
    border-radius: 4px;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: 600;
  }

  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.25em;
    font-weight: 600;
  }

  ul {
    list-style: disc;
    margin-bottom: 20px;
    padding-left: 40px;
  }

  a {
    position: relative;
    display: inline;
    color: ${vars.theme((theme) => theme.contentElements.link)};
    text-decoration: none;
    border-bottom: 1px solid
      ${vars.theme((theme) => theme.contentElements.link)};
  }

  img {
    margin: 0 auto;
  }

  pre {
    margin-top: 0;
    margin-bottom: 20px;
  }

  pre[class*='language-'] {
    width: calc(100% + 1px);
    height: 100%;
    margin-top: 0;
    margin-bottom: 0px;
    border-radius: 0;

    & ::selection {
      color: ${vars.theme(
        (theme) => theme.contentElements.codeBlock.selection.text,
      )};
      background-color: ${vars.theme(
        (theme) => theme.contentElements.codeBlock.selection.back,
      )};
    }
  }

  .remark-highlight {
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0.5rem;
  }
`
