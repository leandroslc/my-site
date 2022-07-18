import { SITE_NAME } from '@/src/lib/constants'
import { Post } from '@/src/lib/types'
import { PageLayout } from '@/src/modules/app'
import { Header } from '../header'
import { PostPreview } from '../post-preview'
import * as S from './styles'

type Props = {
  posts: Post[]
}

export const HomePage = ({ posts }: Props) => {
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
