import Link from 'next/link'
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from '@/src/config/constants'
import { useTranslation } from '@/src/hooks/useTranslation'
import S from './Footer.module.css'

export const Footer = () => {
  const { translate } = useTranslation()

  return (
    <footer className={S.footer}>
      <div className={S.content}>
        <nav className={S.nav}>
          <Link className={S.navLink} href="/" passHref>
            {translate('base.footer-link-home')}
          </Link>
          <Link className={S.navLink} href="/terms-of-use" passHref>
            {translate('base.footer-link-terms-of-use')}
          </Link>
          <Link
            className={S.navSocialLink}
            href={GITHUB_URL}
            passHref
            title="GitHub"
          >
            <FiGithub aria-hidden="true" />
          </Link>
          <Link
            className={S.navSocialLink}
            href={LINKEDIN_URL}
            passHref
            title="LinkedIn"
          >
            <FiLinkedin aria-hidden="true" />
          </Link>
          <Link
            className={S.navSocialLink}
            href={YOUTUBE_URL}
            passHref
            title="YouTube"
          >
            <FiYoutube aria-hidden="true" />
          </Link>
        </nav>
        <img
          className={S.signature}
          src="/assets/site/footer-signature.svg"
          alt="Leandro"
        />
      </div>
      <div className={S.copyright}>
        © Copyright {new Date().getFullYear()}.{' '}
        {translate('base.footer-rights')}
      </div>
    </footer>
  )
}
