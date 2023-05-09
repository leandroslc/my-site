import { GetStaticProps } from 'next'
import { getTranslatedPageContent } from '@/src/services/TranslatedPageContentService'
import {
  TermsOfUsePage,
  type TermsOfUseProps,
} from '@/src/components/termsOfUse/TermsOfUsePage'

const TermsOfUse = ({ content }: TermsOfUseProps) => {
  return <TermsOfUsePage content={content} />
}

export default TermsOfUse

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const content = await getTranslatedPageContent('terms-of-use', locale!)

  return {
    props: {
      content,
    },
  }
}
