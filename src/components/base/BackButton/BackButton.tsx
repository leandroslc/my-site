import { PropsWithChildren } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import * as S from './BackButton.styles'

type Props = PropsWithChildren<{
  href: string
}>

export const BackButton = ({ children, href }: Props) => {
  return (
    <S.ButtonLink href={href}>
      <S.IconContainer aria-hidden="true">
        <S.Icon as={FiArrowLeft} />
      </S.IconContainer>
      <S.Text>{children}</S.Text>
    </S.ButtonLink>
  )
}
