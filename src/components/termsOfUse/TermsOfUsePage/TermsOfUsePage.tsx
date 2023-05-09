import { SITE_NAME } from '@/src/config/constants'
import { BackButton } from '@/src/components/base/BackButton'
import { FormattedContentBody } from '@/src/components/base/FormattedContentBody'
import { PageHeader } from '@/src/components/base/PageHeader'
import { PageLayout } from '@/src/components/base/PageLayout'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './TermsOfUsePage.styles'

export type TermsOfUseProps = {
  content: string
}

export const TermsOfUsePage = ({ content }: TermsOfUseProps) => {
  const { translate } = useTranslation()

  return (
    <PageLayout
      title={`${translate('termsOfUse.title')} | ${SITE_NAME}`}
      header={<PageHeader />}
    >
      <S.PageContainer>
        <BackButton />
        <S.Header>
          <S.Title>
            <S.TitleText>{translate('termsOfUse.title')}</S.TitleText>
          </S.Title>
        </S.Header>
        <FormattedContentBody content={content} />
      </S.PageContainer>
    </PageLayout>
  )
}
