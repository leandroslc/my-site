import { ReactNode } from 'react'
import * as S from './Option.styles'

type Props = {
  name: string
  description: string
  icon?: ReactNode
}

export const Option = ({ name, description, icon }: Props) => {
  return (
    <S.OptionContainer>
      <S.OptionName>{name}</S.OptionName>
      <S.OptionSelection>
        {icon && <S.OptionIcon aria-hidden="true">{icon}</S.OptionIcon>}
        {description}
      </S.OptionSelection>
    </S.OptionContainer>
  )
}
