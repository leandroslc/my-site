import { useRouter } from 'next/router'
import { FiCalendar } from 'react-icons/fi'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import * as S from './PostHeader.styles'

type Props = {
  title: string
  coverImage: string
  date: string
}

export const PostHeader = ({ title, coverImage, date }: Props) => {
  const { locale } = useRouter()

  return (
    <S.Header>
      <S.Title>
        <S.TitleText>{title}</S.TitleText>
      </S.Title>
      <S.Date dateTime={date}>
        <FiCalendar /> {formatDate(date, locale!)}
      </S.Date>
      <S.ImageContainer>
        <S.Image src={coverImage} aria-hidden="true" alt="title" />
      </S.ImageContainer>
    </S.Header>
  )
}
