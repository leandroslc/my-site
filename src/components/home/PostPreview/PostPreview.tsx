import Link from 'next/link'
import { useRouter } from 'next/router'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { truncate } from '@/src/helpers/TruncateHelper'
import { BlogPost } from '@/src/models/BlogPost'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './PostPreview.styles'

type Props = {
  post: BlogPost
}

export const PostPreview = ({ post }: Props) => {
  const { slug, coverImage, title, date, excerpt } = post
  const { locale } = useRouter()
  const { translate } = useTranslation()

  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <S.PostLink aria-label={title}>
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
            <S.Description>{truncate(excerpt, 100)}</S.Description>
          </S.Content>
        </S.Card>
      </S.PostLink>
    </Link>
  )
}
