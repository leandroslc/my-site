import { useEffect, useRef } from 'react'
import { ContentBorder } from '@/src/modules/base/components/content-border'
import * as S from './styles'

export const Header = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWindowScroll = () => {
    if (!titleRef.current || !containerRef.current) {
      return
    }

    const scrollPos = window.scrollY

    if (scrollPos <= 600) {
      titleRef.current.style.transform =
        'translateY(' + -scrollPos / 3 + 'px' + ')'

      titleRef.current.style.opacity = String(
        1 - scrollPos / containerRef.current.getBoundingClientRect().height
      )
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

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
      <S.ContentBorder as={ContentBorder} />
    </S.Container>
  )
}
