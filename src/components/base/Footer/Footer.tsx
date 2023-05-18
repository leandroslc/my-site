import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL } from '@/src/config/constants'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './Footer.styles'

export const Footer = () => {
  const { translate } = useTranslation()

  return (
    <S.Footer>
      <S.Content>
        <S.Nav>
          <Link as="/" href="/" passHref>
            <S.NavLink>{translate('base.footer-link-home')}</S.NavLink>
          </Link>
          <Link as="/terms-of-use" href="/terms-of-use" passHref>
            <S.NavLink>{translate('base.footer-link-terms-of-use')}</S.NavLink>
          </Link>
          <Link as={GITHUB_URL} href={GITHUB_URL} passHref>
            <S.NavSocialLink title="GitHub">
              <FiGithub aria-hidden="true" />
            </S.NavSocialLink>
          </Link>
          <Link as={LINKEDIN_URL} href={LINKEDIN_URL} passHref>
            <S.NavSocialLink title="LinkedIn">
              <FiLinkedin aria-hidden="true" />
            </S.NavSocialLink>
          </Link>
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
