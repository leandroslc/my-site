import React, { forwardRef, PropsWithChildren } from 'react'
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

export const InnerDropdownItem = <T extends AnyComponentType>(
  props: Props<T>,
  ref: React.ForwardedRef<T>
) => {
  const { as, active = false, children, ...otherProps } = props

  return (
    <S.Item
      ref={ref}
      as={as}
      className={active ? 'is-active' : ''}
      is-active={active}
      {...otherProps}
    >
      {children}
    </S.Item>
  )
}

export const DropdownItem = forwardRef(InnerDropdownItem)
