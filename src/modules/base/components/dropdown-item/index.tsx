import { PropsWithChildren } from 'react'
import { AnyComponentType, PropsWithAnyComponent } from '../../types'
import * as S from './styles'

interface InnerProps {
  active?: boolean
}

export type Props<
  T extends AnyComponentType,
  U = InnerProps
> = PropsWithAnyComponent<T, PropsWithChildren<U>>

export const DropdownItem = <T extends AnyComponentType>({
  as,
  active = false,
  children,
  ...otherProps
}: Props<T>) => {
  return (
    <S.Item as={as} $isActive={active} {...otherProps}>
      {children}
    </S.Item>
  )
}
