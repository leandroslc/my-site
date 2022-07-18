import { formatDate } from '@/src/lib/helpers'
import * as S from './styles'

type Props = {
  title: string
  coverImage: string
  date: string
}

export const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <S.Header>
      <S.ImageContainer>
        <S.Image src={coverImage} aria-hidden="true" alt="title" />
      </S.ImageContainer>
      <S.Date dateTime={date}>{formatDate(date)}</S.Date>
      <S.Title>{title}</S.Title>
    </S.Header>
  )
}
