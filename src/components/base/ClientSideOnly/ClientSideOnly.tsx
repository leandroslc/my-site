import { PropsWithChildren, useEffect, useState } from 'react'

type Props = PropsWithChildren<{}>

export const ClientSideOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [setHasMounted])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
