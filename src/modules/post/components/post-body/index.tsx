import * as S from './styles'

type Props = {
  content: string
}

export const PostBody = ({ content }: Props) => {
  return <S.Container dangerouslySetInnerHTML={{ __html: content }} />
}
