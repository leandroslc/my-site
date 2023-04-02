import React from 'react'
import { Border } from '../Border'
import * as S from './FooterBorder.styles'

type Props = React.HTMLAttributes<HTMLDivElement>

export const FooterBorder = ({ className }: Props) => {
  return (
    <S.Container className={className}>
      <S.Border as={Border} />
    </S.Container>
  )
}
