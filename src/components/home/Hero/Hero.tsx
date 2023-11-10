import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from '@/src/config/constants'
import { useTranslation } from '@/src/hooks/useTranslation'
import { Emoji } from '@/src/components/base/Emoji'
import * as S from './Hero.styles'

export const Hero = () => {
  const { translate, translateWithElements } = useTranslation()

  return (
    <S.Hero>
      <S.Content>
        <S.Title>
          {translateWithElements(
            'home.hero-title',
            <Emoji
              symbol="&#x1F60A;"
              alt={translate('emojis.smiling-face-with-smiling-eyes')}
            />,
          )}
        </S.Title>
        <S.Description>
          {translateWithElements(
            'home.hero-description',
            <S.Emphasys>{translate('home.hero-job')}</S.Emphasys>,
          )}
        </S.Description>
        <S.Social>
          <S.SocialLink href={GITHUB_URL}>
            <FiGithub size="1.2rem" aria-hidden="true" />
            GitHub
          </S.SocialLink>
          <S.SocialLink href={LINKEDIN_URL}>
            <FiLinkedin size="1.2rem" aria-hidden="true" />
            LinkedIn
          </S.SocialLink>
          <S.SocialLink href={YOUTUBE_URL}>
            <FiYoutube size="1.2rem" aria-hidden="true" />
            YouTube
          </S.SocialLink>
        </S.Social>
      </S.Content>
      <S.Portrait
        src="/assets/site/home/me.webp"
        alt={translate('home.hero-portrait-alt')}
      />
    </S.Hero>
  )
}
