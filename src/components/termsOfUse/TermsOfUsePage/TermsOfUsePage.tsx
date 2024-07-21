import { SITE_NAME } from '@/src/config/constants'
import { BackButton } from '@/src/components/base/BackButton'
import { FormattedContentBody } from '@/src/components/base/FormattedContentBody'
import { PageHeader } from '@/src/components/base/PageHeader'
import { PageLayout } from '@/src/components/base/PageLayout'
import { PageTitle } from '@/src/components/base/PageTitle'
import { Meta } from '@/src/components/base/Meta'
import { useTranslation } from '@/src/hooks/useTranslation'
import S from './TermsOfUsePage.module.css'

export type TermsOfUseProps = {
  content: string
  ogImageUrl: string
  url: string
}

export const TermsOfUsePage = ({
  content,
  ogImageUrl,
  url,
}: TermsOfUseProps) => {
  const { translate } = useTranslation()

  return (
    <PageLayout header={<PageHeader />}>
      <Meta
        title={`${translate('termsOfUse.title')} | ${SITE_NAME}`}
        description={translate('home.meta-description')}
        url={url}
        ogImageUrl={ogImageUrl}
      />
      <article className={S.pageContainer}>
        <BackButton href="/">{translate('base.back-to-home')}</BackButton>
        <div className={S.header}>
          <PageTitle>{translate('termsOfUse.title')}</PageTitle>
        </div>
        <FormattedContentBody content={content} />
      </article>
    </PageLayout>
  )
}
