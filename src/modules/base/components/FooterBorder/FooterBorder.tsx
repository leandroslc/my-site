import React from 'react'
import { ContentBorder } from '../content-border'
import * as S from './FooterBorder.styles'

type Props = React.HTMLAttributes<HTMLDivElement>

export const FooterBorder = ({ className }: Props) => {
  return (
    <S.Container className={className}>
      <S.Border as={ContentBorder} />
    </S.Container>
  )
}
