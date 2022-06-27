import { Post } from '@/src/lib/types'
import { PageLayout } from '@/src/modules/app'
import * as S from './styles'

type Props = {
  posts: Post[]
}

export const HomePage = ({ posts }: Props) => {
  return (
    <PageLayout title="Test">
      <S.Content>
        <S.Posts>
          {posts.map((post) => (
            <S.PostCard key={post.slug}>
              <S.Image
                src={post.coverImage}
                alt={`Cover image to ${post.title}`}
              />
              <S.Title>{post.title}</S.Title>
              <S.Date dateTime={post.date}>{post.date}</S.Date>
              <S.Description>{post.excerpt}</S.Description>
            </S.PostCard>
          ))}
        </S.Posts>
      </S.Content>
    </PageLayout>
  )
}
