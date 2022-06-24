import React from 'react'

export type AnyComponentType =
  | keyof JSX.IntrinsicElements
  | React.ComponentType
  | object

export type PropsWithAnyComponent<
  T,
  U = {}
> = T extends keyof JSX.IntrinsicElements
  ? { as: T } & JSX.IntrinsicElements[T] & U
  : T extends React.ComponentType<infer M>
  ? { as: T } & M & U
  : never
