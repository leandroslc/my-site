import { SITE_SUBNAME } from '@/src/config/constants'
import { Border } from '@/src/components/base/Border'
import { useTitleScroll } from '@/src/hooks/useTitleScroll'
import { useTranslation } from '@/src/hooks/useTranslation'
import S from './PageHeader.module.css'

export const PageHeader = () => {
  const { titleRef, containerRef } = useTitleScroll()
  const { translate } = useTranslation()

  return (
    <div className={S.container} ref={containerRef}>
      <h1 className={S.title} ref={titleRef}>
        <img
          className={S.titleImage}
          src="/assets/site/title-signature.svg"
          alt="Leandro's"
        />
        <span className={S.titleText}>{SITE_SUBNAME}</span>
      </h1>
      <img
        className={S.paintingImage}
        src="/assets/site/header-painting.webp"
        alt={translate('post.header-painting-alt')}
      />
      <Border className={S.contentBorder} />
    </div>
  )
}
