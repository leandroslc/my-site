import { SITE_NAME } from '@/src/config/constants'
import { BlogPost } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout'
import { Emoji } from '../../base/Emoji'
import { HomeHeader } from '../HomeHeader'
import { PostPreview } from '../PostPreview'
import { Hero } from '../Hero'
import * as S from './HomePage.styles'

export type HomeProps = {
  posts: BlogPost[]
}

export const HomePage = ({ posts }: HomeProps) => {
  return (
    <PageLayout title={SITE_NAME} header={<HomeHeader />}>
      <S.Content>
        <Hero />
        <S.Title>Blog</S.Title>
        <S.Description>
          Sometimes I try to write about things I wanted to know and that maybe
          should be important to other people. If passing by, take a time to
          have a look <Emoji symbol="&#x1F642;" alt="Slightly Smiling Face" />.
        </S.Description>
        <S.Posts>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>
      </S.Content>
    </PageLayout>
  )
}
