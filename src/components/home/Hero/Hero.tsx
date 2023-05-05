import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useTranslation } from '@/src/hooks/useTranslation'
import { Emoji } from '../../base/Emoji'
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
            />
          )}
        </S.Title>
        <S.Description>
          {translateWithElements(
            'home.hero-description',
            <S.Emphasys>{translate('home.hero-job')}</S.Emphasys>
          )}
        </S.Description>
        <S.Social>
          <S.SocialLink href="/">
            <FiGithub size="1.2rem" />
            GitHub
          </S.SocialLink>
          <S.SocialLink href="/">
            <FiLinkedin size="1.2rem" />
            LinkedIn
          </S.SocialLink>
        </S.Social>
      </S.Content>
      <S.Image
        src="/assets/site/me.png"
        alt={translate('home.hero-portrait-alt')}
      />
    </S.Hero>
  )
}
