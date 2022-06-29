import { Post } from '@/src/lib/types'
import { PageLayout } from '@/src/modules/app'
import { PostPreview } from '../post-preview'
import * as S from './styles'

type Props = {
  posts: Post[]
}

export const HomePage = ({ posts }: Props) => {
  return (
    <PageLayout title="Test">
      <S.Content>
        <S.Posts>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>
      </S.Content>
    </PageLayout>
  )
}
