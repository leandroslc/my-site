import Link from 'next/link'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { truncate } from '@/src/helpers/TruncateHelper'
import { BlogPost } from '@/src/models/BlogPost'
import * as S from './PostPreview.styles'

type Props = {
  post: BlogPost
}

export const PostPreview = ({ post }: Props) => {
  const { slug, coverImage, title, date, excerpt } = post

  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <S.PostLink aria-label={title}>
        <S.Card key={slug}>
          <S.Header>
            <S.Image src={coverImage} alt={`Image de capa para ${title}`} />
          </S.Header>
          <S.Content>
            <S.Date dateTime={date}>{formatDate(date)}</S.Date>
            <S.Title>{title}</S.Title>
            <S.Description>{truncate(excerpt, 100)}</S.Description>
          </S.Content>
        </S.Card>
      </S.PostLink>
    </Link>
  )
}
