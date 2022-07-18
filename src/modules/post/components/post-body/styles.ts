import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 16px 0 16px;
  line-height: 1.625;

  p,
  ul,
  ol,
  blockquote {
    @apply my-6;
  }

  h2 {
    @apply text-3xl mt-12 mb-4 leading-snug;
  }

  h3 {
    @apply text-2xl mt-8 mb-4 leading-snug;
  }
`
