import { useRouter } from 'next/router'
import { FiCalendar } from 'react-icons/fi'
import { Tags } from '@/src/components/base/Tags'
import { PageTitle } from '@/src/components/base/PageTitle'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { useTranslation } from '@/src/hooks/useTranslation'
import S from './PostHeader.module.css'

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
    <header className={S.header}>
      <PageTitle>{title}</PageTitle>
      <time className={S.date} dateTime={date}>
        <FiCalendar /> {formatDate(date, locale!)}
      </time>
      <div className={S.tagsContainer}>
        <Tags tags={tags} />
      </div>
      <div className={S.imageContainer}>
        <img
          className={S.image}
          src={coverImage}
          aria-hidden="true"
          alt={`${translate('post.blog-post-image-alt')} ${title}`}
        />
      </div>
    </header>
  )
}
