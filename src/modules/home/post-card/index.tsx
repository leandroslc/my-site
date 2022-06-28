import Link from 'next/link'
import { formatDate, truncate } from '@/src/lib/helpers'
import { Post } from '@/src/lib/types'
import * as S from './styles'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const { slug, coverImage, title, date, excerpt } = post

  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <S.PostLink aria-label={title}>
        <S.PostCard key={slug}>
          <S.Header>
            <S.Image src={coverImage} alt={`Cover image to ${title}`} />
          </S.Header>
          <S.Content>
            <S.Date dateTime={date}>{formatDate(date)}</S.Date>
            <S.Title>{title}</S.Title>
            <S.Description>{truncate(excerpt, 100)}</S.Description>
          </S.Content>
        </S.PostCard>
      </S.PostLink>
    </Link>
  )
}
