import { useRouter } from 'next/router'
import { FiCalendar } from 'react-icons/fi'
import { Tags } from '@/src/components/base/Tags'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './PostHeader.styles'

type Props = {
  title: string
  coverImage: string
  date: string
  tags?: string[]
}

export const PostHeader = ({ title, coverImage, date, tags }: Props) => {
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
      <S.TagsContainer>
        <Tags tags={tags} />
      </S.TagsContainer>
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
