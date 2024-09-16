import { ReactNode } from 'react'
import S from './Option.module.css'

type Props = {
  name: string
  description: string
  icon?: ReactNode
}

export const Option = ({ name, description, icon }: Props) => {
  return (
    <div className={S.optionContainer}>
      <strong>{name}</strong>
      <span className={S.optionSelection}>
        {icon && (
          <span className={S.optionIcon} aria-hidden="true">
            {icon}
          </span>
        )}
        {description}
      </span>
    </div>
  )
}
