import { Border } from '@/src/components/base/Border'
import { useTitleScroll } from '@/src/hooks/useTitleScroll'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './HomeHeader.styles'

export const HomeHeader = () => {
  const { titleRef, containerRef } = useTitleScroll()
  const { translate } = useTranslation()

  return (
    <S.Container ref={containerRef}>
      <S.Title ref={titleRef}>
        <S.TitleImage src="/assets/site/title-signature.svg" alt="Leandro's" />
        <S.TitleText>Blog</S.TitleText>
      </S.Title>
      <S.PaintingImage
        src="/assets/site/header-painting.png"
        alt={translate('home.header-painting-alt')}
      />
      <S.ContentBorder as={Border} />
    </S.Container>
  )
}
