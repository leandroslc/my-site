import { SITE_NAME } from '@/src/lib/constants'
import { Post } from '@/src/lib/services/posts/types'
import { Emoji } from '@/src/modules/base/components/emoji'
import { PageLayout } from '@/src/modules/base/components/page-layout'
import { Header } from '../components/header'
import { PostPreview } from '../components/post-preview'
import * as S from './styles'

export type HomeProps = {
  posts: Post[]
}

export const HomePage = ({ posts }: HomeProps) => {
  return (
    <PageLayout title={SITE_NAME} header={<Header />}>
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
