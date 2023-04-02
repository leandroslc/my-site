import { SITE_NAME } from '@/src/lib/constants'
import { Post } from '@/src/lib/services/posts/types'
import { Emoji } from '@/src/components/base/Emoji'
import { PageLayout } from '@/src/components/base/PageLayout'
import { HomeHeader } from '../HomeHeader'
import { PostPreview } from '../PostPreview'
import * as S from './HomePage.styles'

export type HomeProps = {
  posts: Post[]
}

export const HomePage = ({ posts }: HomeProps) => {
  return (
    <PageLayout title={SITE_NAME} header={<HomeHeader />}>
      <S.Content>
        <S.Hi>
          Hi <Emoji symbol="&#x1F60A;" alt="Smiling Face with Smiling Eyes" />
        </S.Hi>
        <S.IntroText>You can read some of my posts here:</S.IntroText>
        <S.Posts>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>
      </S.Content>
    </PageLayout>
  )
}
