import { PropsWithChildren } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import S from './HomeLink.module.css'
import Link from 'next/link'

type Props = PropsWithChildren<{
  className?: string
  href: string
}>

export const HomeLink = ({ className, children, href }: Props) => {
  return (
    <Link className={[S.homeLink, className].join(' ')} href={href}>
      {children}
      <FiArrowRight className={S.icon} aria-hidden="true" />
    </Link>
  )
}
