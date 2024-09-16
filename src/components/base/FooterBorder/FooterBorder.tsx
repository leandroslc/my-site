import React from 'react'
import { Border } from '../Border'
import S from './FooterBorder.module.css'

type Props = React.HTMLAttributes<HTMLDivElement>

export const FooterBorder = ({ className }: Props) => {
  return (
    <div className={[S.container, className].join(' ')}>
      <Border className={S.border} />
    </div>
  )
}
