import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.Nav>
          <Link as="/" href="/" passHref>
            <S.NavLink>Home</S.NavLink>
          </Link>
          <Link as="/" href="/" passHref>
            <S.NavLink>Terms of Use</S.NavLink>
          </Link>
          <Link as="/" href="/" passHref>
            <S.NavSocialLink>
              <FiGithub />
            </S.NavSocialLink>
          </Link>
          <Link as="/" href="/" passHref>
            <S.NavSocialLink>
              <FiLinkedin />
            </S.NavSocialLink>
          </Link>
        </S.Nav>
        <S.Signature src="/assets/site/footer-signature.svg" alt="Leandro" />
      </S.Content>
      <S.Copyright>© Copyright 2022. All rights reserved.</S.Copyright>
    </S.Footer>
  )
}
