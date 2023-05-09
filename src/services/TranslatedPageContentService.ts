import path from 'path'
import fs from 'fs'
import markdownToHtml from '@/src/services/MarkdownToHtmlService'
import { translatedPagesDirectory } from '@/src/config/config'

export const getTranslatedPageContent = (page: string, locale: string) => {
  const filePath = path.join(translatedPagesDirectory, page, `${locale}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  return markdownToHtml(fileContent || '')
}
