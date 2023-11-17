import { PropsWithChildren } from 'react'
import * as S from './PageTitle.styles'

type Props = PropsWithChildren<{}>

export const PageTitle = ({ children }: Props) => {
  return (
    <S.Title>
      <S.TitleText>{children}</S.TitleText>
    </S.Title>
  )
}
