import { GetStaticProps } from 'next'
import { getTranslatedPageContent } from '@/src/services/TranslatedPageContentService'
import { makeAbsoluteUrl } from '@/src/services/UrlService'
import { HOME_OG_IMAGE_URL } from '@/src/config/constants'
import {
  TermsOfUsePage,
  type TermsOfUseProps,
} from '@/src/components/termsOfUse/TermsOfUsePage'

const TermsOfUse = ({ content, ogImageUrl }: TermsOfUseProps) => {
  return <TermsOfUsePage content={content} ogImageUrl={ogImageUrl} />
}

export default TermsOfUse

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const content = await getTranslatedPageContent('terms-of-use', locale!)

  return {
    props: {
      content,
      ogImageUrl: makeAbsoluteUrl(HOME_OG_IMAGE_URL),
    },
  }
}
