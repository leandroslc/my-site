import Link from 'next/link'
import { formatDate, truncate } from '@/src/lib/helpers'
import { Post } from '@/src/lib/types'
import * as S from './styles'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <S.PostCard key={post.slug}>
      <S.Header>
        <S.Image src={post.coverImage} alt={`Cover image to ${post.title}`} />
      </S.Header>
      <S.Content>
        <S.Title>
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            <a className="hover:underline">{post.title}</a>
          </Link>
        </S.Title>
        <S.Date dateTime={post.date}>{formatDate(post.date)}</S.Date>
        <S.Description>{truncate(post.excerpt, 100)}</S.Description>
      </S.Content>
    </S.PostCard>
  )
}
