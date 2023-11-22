import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FiFolder, FiSearch } from 'react-icons/fi'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './NoResults.styles'

type Props = Pick<HTMLAttributes<HTMLElement>, 'className' | 'hidden'>

const InnerNoResults = (props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { translate } = useTranslation()

  return (
    <S.Container {...props} ref={ref as React.RefObject<never>}>
      <S.IconContainer aria-hidden="true">
        <S.Icon as={FiFolder} />
        <S.AboveIcon as={FiSearch} />
      </S.IconContainer>
      <S.Text>{translate('posts.nothing-found')}</S.Text>
    </S.Container>
  )
}

export const NoResults = forwardRef(InnerNoResults)
