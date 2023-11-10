import { PropsWithChildren } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import * as S from './HomeLink.styles'

type Props = PropsWithChildren<{
  className?: string
  href: string
}>

export const HomeLink = ({ className, children, href }: Props) => {
  return (
    <S.HomeLink href={href} className={className}>
      {children}
      <S.Icon as={FiArrowRight} aria-hidden="true" />
    </S.HomeLink>
  )
}
