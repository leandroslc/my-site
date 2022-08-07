import Link from 'next/link'
import { formatDate, truncate } from '@/src/lib/helpers'
import { Post } from '@/src/lib/services/posts/types'
import * as S from './styles'

type Props = {
  post: Post
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
