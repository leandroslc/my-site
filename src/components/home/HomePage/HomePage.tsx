import {
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_NAME,
  YOUTUBE_URL,
} from '@/src/config/constants'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout'
import { Meta } from '@/src/components//base/Meta'
import { Emoji } from '@/src/components//base/Emoji'
import { useTranslation } from '@/src/hooks/useTranslation'
import { HomeHeader } from '../HomeHeader'
import { HomeLink } from '../HomeLink'
import { PostPreview } from '../PostPreview'
import { Hero } from '../Hero'
import S from './HomePage.module.css'

export type HomeProps = {
  posts: BlogPostPreview[]
  ogImageUrl: string
  url: string
}

export const HomePage = ({ posts, ogImageUrl, url }: HomeProps) => {
  const { translate, translateWithElements } = useTranslation()

  return (
    <PageLayout header={<HomeHeader />}>
      <Meta
        title={SITE_NAME}
        description={translate('home.meta-description')}
        url={url}
        ogImageUrl={ogImageUrl}
      />
      <section className={S.content}>
        <Hero />

        <div className={S.section}>
          <h1 className={S.sectionTitle}>{translate('home.blog-title')}</h1>
          <div className={S.sectionDescription}>
            <p>{translate('home.blog-description-first')}</p>
          </div>
          <HomeLink className={S.sectionSideLink} href="/posts">
            {translate('home.blog-link')}
          </HomeLink>
        </div>

        <main className={S.posts}>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </main>

        <div className={S.sectionReverse}>
          <h1 className={S.sectionTitle}>{translate('home.profile-title')}</h1>
          <img
            className={S.sectionImage}
            src="/assets/site/home/work.webp"
            alt={translate('home.profile-image-alt')}
          />
          <div className={S.sectionDescription}>
            {translate('home.profile-description')}
          </div>
          <HomeLink className={S.sectionLink} href={LINKEDIN_URL}>
            {translate('home.profile-link')}
          </HomeLink>
        </div>

        <div className={S.section}>
          <h1 className={S.sectionTitle}>{translate('home.music-title')}</h1>
          <img
            className={S.sectionImage}
            src="/assets/site/home/music.webp"
            alt={translate('home.music-image-alt')}
          />
          <div className={S.sectionDescription}>
            <p>
              {translateWithElements(
                'home.music-description',
                <Emoji
                  symbol="&#x1F60A;"
                  alt={translate('emojis.smiling-face-with-smiling-eyes')}
                />,
              )}
            </p>
          </div>
          <HomeLink className={S.sectionLink} href={YOUTUBE_URL}>
            {translate('home.music-link')}
          </HomeLink>
        </div>

        <div className={S.sectionReverse}>
          <h1 className={S.sectionTitle}>{translate('home.projects-title')}</h1>
          <img
            className={S.sectionImage}
            src="/assets/site/home/portfolio.webp"
            alt={translate('home.projects-image-alt')}
          />
          <div className={S.sectionDescription}>
            <p>
              {translateWithElements(
                'home.projects-description',
                <Emoji
                  symbol="&#x1F60A;"
                  alt={translate('emojis.smiling-face-with-smiling-eyes')}
                />,
              )}
            </p>
          </div>
          <HomeLink className={S.sectionLink} href={GITHUB_URL}>
            {translate('home.projects-link')}
          </HomeLink>
        </div>
      </section>
    </PageLayout>
  )
}
