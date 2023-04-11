import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Emoji } from '../../base/Emoji'
import * as S from './Hero.styles'

export const Hero = () => {
  return (
    <S.Hero>
      <S.Content>
        <S.Title>
          Hi
          <Emoji symbol="&#x1F60A;" alt="Smiling Face with Smiling Eyes" />,
          I&apos;m Leandro
        </S.Title>
        <S.Description>
          I&apos;m a full stack <S.Emphasys>software developer</S.Emphasys>.
          Mostly coding because it is fun. When not in front of a computer, I
          also like painting, writing, reading and playing piano.
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
      <S.Image src="/assets/site/me.png" alt="A simple portrait of myself" />
    </S.Hero>
  )
}
