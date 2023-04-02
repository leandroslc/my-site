import { Border } from '@/src/modules/base/components/Border'
import { useTitleScroll } from './useTitleScroll'
import * as S from './styles'

export const Header = () => {
  const { titleRef, containerRef } = useTitleScroll()

  return (
    <S.Container ref={containerRef}>
      <S.Title ref={titleRef}>
        <S.TitleImage src="/assets/site/title-signature.svg" alt="Leandro's" />
        <S.TitleText>Blog</S.TitleText>
      </S.Title>
      <S.PaintingImage
        src="/assets/site/header-painting.png"
        alt="Uma pintura simples de teclas de piano, um relógio de bolso, uma xícara e um pincel"
      />
      <S.ContentBorder as={Border} />
    </S.Container>
  )
}
