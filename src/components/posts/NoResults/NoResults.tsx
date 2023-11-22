import { ForwardedRef, forwardRef } from 'react'
import { FiFolder } from 'react-icons/fi'
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
      <S.IconContainer>
        <S.Icon as={FiFolder} />
      </S.IconContainer>
      <S.Text>Nenhuma postagem encontrada</S.Text>
    </S.Container>
  )
}

export const NoResults = forwardRef(InnerNoResults)
