import { Border } from '@/src/components/base/Border'
import { useTitleScroll } from '@/src/hooks/useTitleScroll'
import * as S from './PostPageHeader.styles'

export const PostPageHeader = () => {
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
