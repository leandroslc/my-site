import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import headingId from 'remark-heading-id'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/304
    .use(prism as never)
    .use(headingId, { defaults: true })
    .use(html, { sanitize: false })
    .process(markdown)

  return result.toString()
}
