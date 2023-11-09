import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from '@/src/config/constants'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './Footer.styles'

export const Footer = () => {
  const { translate } = useTranslation()

  return (
    <S.Footer>
      <S.Content>
        <S.Nav>
          <S.NavLink href="/" passHref>
            {translate('base.footer-link-home')}
          </S.NavLink>
          <S.NavLink href="/terms-of-use" passHref>
            {translate('base.footer-link-terms-of-use')}
          </S.NavLink>
          <S.NavSocialLink href={GITHUB_URL} passHref title="GitHub">
            <FiGithub aria-hidden="true" />
          </S.NavSocialLink>
          <S.NavSocialLink href={LINKEDIN_URL} passHref title="LinkedIn">
            <FiLinkedin aria-hidden="true" />
          </S.NavSocialLink>
          <S.NavSocialLink href={YOUTUBE_URL} passHref title="YouTube">
            <FiYoutube aria-hidden="true" />
          </S.NavSocialLink>
        </S.Nav>
        <S.Signature src="/assets/site/footer-signature.svg" alt="Leandro" />
      </S.Content>
      <S.Copyright>
        © Copyright {new Date().getFullYear()}.{' '}
        {translate('base.footer-rights')}
      </S.Copyright>
    </S.Footer>
  )
}
