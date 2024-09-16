import { PropsWithChildren } from 'react'
import S from './PageTitle.module.css'

type Props = PropsWithChildren<{}>

export const PageTitle = ({ children }: Props) => {
  return (
    <h1 className={S.title}>
      <span className={S.titleText}>{children}</span>
    </h1>
  )
}
