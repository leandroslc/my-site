import { useRouter } from 'next/router'
import { FiCalendar } from 'react-icons/fi'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './PostHeader.styles'

type Props = {
  title: string
  coverImage: string
  date: string
}

export const PostHeader = ({ title, coverImage, date }: Props) => {
  const { locale } = useRouter()
  const { translate } = useTranslation()

  return (
    <S.Header>
      <S.Title>
        <S.TitleText>{title}</S.TitleText>
      </S.Title>
      <S.Date dateTime={date}>
        <FiCalendar /> {formatDate(date, locale!)}
      </S.Date>
      <S.ImageContainer>
        <S.Image
          src={coverImage}
          aria-hidden="true"
          alt={`${translate('post.blog-post-image-alt')} ${title}`}
        />
      </S.ImageContainer>
    </S.Header>
  )
}
