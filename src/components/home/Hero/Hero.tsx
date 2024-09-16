import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from '@/src/config/constants'
import { useTranslation } from '@/src/hooks/useTranslation'
import { Emoji } from '@/src/components/base/Emoji'
import S from './Hero.module.css'

export const Hero = () => {
  const { translate, translateWithElements } = useTranslation()

  return (
    <div className={S.hero}>
      <div className={S.content}>
        <h1 className={S.title}>
          {translateWithElements(
            'home.hero-title',
            <Emoji
              symbol="&#x1F60A;"
              alt={translate('emojis.smiling-face-with-smiling-eyes')}
            />,
          )}
        </h1>
        <p className={S.description}>
          {translateWithElements(
            'home.hero-description',
            <span className={S.emphasys}>{translate('home.hero-job')}</span>,
          )}
        </p>
        <div className={S.social}>
          <a className={S.socialLink} href={GITHUB_URL}>
            <FiGithub size="1.2rem" aria-hidden="true" />
            GitHub
          </a>
          <a className={S.socialLink} href={LINKEDIN_URL}>
            <FiLinkedin size="1.2rem" aria-hidden="true" />
            LinkedIn
          </a>
          <a className={S.socialLink} href={YOUTUBE_URL}>
            <FiYoutube size="1.2rem" aria-hidden="true" />
            YouTube
          </a>
        </div>
      </div>
      <img
        className={S.portrait}
        src="/assets/site/home/me.webp"
        alt={translate('home.hero-portrait-alt')}
      />
    </div>
  )
}
