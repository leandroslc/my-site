import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import S from './BackButton.module.css'

type Props = PropsWithChildren<{
  href: string
}>

export const BackButton = ({ children, href }: Props) => {
  return (
    <Link className={S.buttonLink} href={href}>
      <div className={S.iconContainer} aria-hidden="true">
        <FiArrowLeft className={S.icon} />
      </div>
      <span className={S.text}>{children}</span>
    </Link>
  )
}
