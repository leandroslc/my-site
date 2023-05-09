import * as S from './FormattedContentBody.styles'

type Props = {
  content: string
}

export const FormattedContentBody = ({ content }: Props) => {
  return <S.Container dangerouslySetInnerHTML={{ __html: content }} />
}
