import React, { PropsWithChildren } from 'react'
import S from './OptionItem.module.css'

type Props = PropsWithChildren<{
  Icon?: React.FunctionComponent<
    React.DetailedHTMLProps<React.HTMLAttributes<SVGElement>, {}>
  >
  iconColor?: string
}>

export const OptionItem = ({ children, Icon, iconColor }: Props) => {
  return (
    <span className={S.optionItem}>
      {Icon && (
        <Icon className={S.optionIcon} aria-hidden="true" color={iconColor} />
      )}
      {children}
    </span>
  )
}
