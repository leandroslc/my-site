import { PropsWithChildren } from 'react'
import {
  AnyComponentType,
  PropsWithAnyComponent,
} from '@/src/lib/types/GenericComponent'
import * as S from './DropdownItem.styles'

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
    <S.Item
      as={as}
      className={active ? 'is-active' : ''}
      is-active={active}
      {...otherProps}
    >
      {children}
    </S.Item>
  )
}
