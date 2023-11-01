import { useCallback, useEffect, useRef } from 'react'

export const useTitleScroll = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateTitle = (
    titleElement: HTMLHeadingElement,
    position: number,
    opacity: number,
  ) => {
    titleElement.style.transform = `translateY(${position}px)`
    titleElement.style.opacity = String(opacity)
  }

  const handleWindowScroll = useCallback(() => {
    if (!titleRef.current || !containerRef.current) {
      return
    }

    const scrollPosition = window.scrollY
    const containerHeight = containerRef.current.getBoundingClientRect().height

    if (scrollPosition <= containerHeight) {
      return updateTitle(
        titleRef.current,
        -scrollPosition / 3,
        1 - scrollPosition / containerHeight,
      )
    }

    return updateTitle(titleRef.current, containerHeight, 0)
  }, [])

  useEffect(() => {
    handleWindowScroll()

    window.addEventListener('scroll', handleWindowScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [handleWindowScroll])

  return { titleRef, containerRef }
}
