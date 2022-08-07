import { SITE_NAME } from '@/src/lib/constants'
import { Post } from '@/src/lib/services/posts/types'
import { PageLayout } from '@/src/modules/base/components/page-layout'
import { Header } from '../header'
import { PostPreview } from '../post-preview'
import * as S from './styles'

export type HomeProps = {
  posts: Post[]
}

export const HomePage = ({ posts }: HomeProps) => {
  return (
    <PageLayout title={SITE_NAME} header={<Header />}>
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
