import { ForwardedRef, forwardRef } from 'react'
import { FiFolder, FiSearch } from 'react-icons/fi'
import * as S from './NoResults.styles'

type Props = {
  className?: string
}

const InnerNoResults = (
  { className }: Props,
  ref: ForwardedRef<HTMLElement>,
) => {
  return (
    <S.Container className={className} ref={ref as React.RefObject<never>}>
      <S.IconContainer aria-hidden="true">
        <S.Icon as={FiFolder} />
        <S.AboveIcon as={FiSearch} />
      </S.IconContainer>
      <S.Text>Nenhuma postagem encontrada</S.Text>
    </S.Container>
  )
}

export const NoResults = forwardRef(InnerNoResults)
