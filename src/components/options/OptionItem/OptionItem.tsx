import { PropsWithChildren } from 'react'
import * as S from './OptionItem.styles'

type Props = PropsWithChildren<{
  Icon?: React.FunctionComponent
}>

export const OptionItem = ({ children, Icon }: Props) => {
  return (
    <S.OptionItem>
      {Icon && <S.OptionIcon as={Icon} aria-hidden="true" />}
      {children}
    </S.OptionItem>
  )
}
