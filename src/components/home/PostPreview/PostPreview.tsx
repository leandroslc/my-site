import { useRouter } from 'next/router'
import { Tags } from '@/src/components/base/Tags'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './PostPreview.styles'

type Props = {
  post: BlogPostPreview
}

export const PostPreview = ({ post }: Props) => {
  const { slug, coverImage, title, date } = post
  const { locale } = useRouter()
  const { translate } = useTranslation()

  return (
    <S.PostLink href={`/posts/${slug}`} passHref aria-label={title}>
      <S.Card key={slug}>
        <S.Header>
          <S.Image
            src={coverImage}
            alt={`${translate('home.blog-post-image-alt')} ${title}`}
          />
        </S.Header>
        <S.Content>
          <S.Date dateTime={date}>{formatDate(date, locale!)}</S.Date>
          <S.Title>{title}</S.Title>
          <Tags tags={post.tags} />
        </S.Content>
      </S.Card>
    </S.PostLink>
  )
}
