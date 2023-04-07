import * as S from './Option.styles'

type Props = {
  name: string
  selectedOptionDescription: string
  Icon?: React.FunctionComponent
}

export const Option = ({ name, selectedOptionDescription, Icon }: Props) => {
  return (
    <S.OptionContainer>
      <S.OptionName>{name}</S.OptionName>
      <S.OptionSelection>
        {Icon && <S.OptionIcon as={Icon} aria-hidden="true" />}
        {selectedOptionDescription}
      </S.OptionSelection>
    </S.OptionContainer>
  )
}
