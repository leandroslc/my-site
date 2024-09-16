import React, { forwardRef, PropsWithChildren } from 'react'
import {
  AnyComponentType,
  PropsWithAnyComponent,
} from '@/src/types/GenericComponent'
import S from './DropdownItem.module.css'

interface InnerProps {
  active?: boolean
}

export type Props<
  T extends AnyComponentType,
  U = InnerProps,
> = PropsWithAnyComponent<T, PropsWithChildren<U>>

export const InnerDropdownItem = <T extends AnyComponentType>(
  props: Props<T>,
  ref: React.ForwardedRef<T>,
) => {
  const { as, active = false, children, ...otherProps } = props

  const AsElement = as as 'li'

  return (
    <AsElement
      ref={ref as React.RefObject<never>}
      className={[S.item, active ? S.isActive : ''].join(' ')}
      {...otherProps}
    >
      {children}
    </AsElement>
  )
}

export const DropdownItem = forwardRef(InnerDropdownItem)
