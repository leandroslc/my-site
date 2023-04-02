import * as S from './PostBody.styles'

type Props = {
  content: string
}

export const PostBody = ({ content }: Props) => {
  return <S.Container dangerouslySetInnerHTML={{ __html: content }} />
}
