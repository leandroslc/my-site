import { PropsWithChildren, useCallback, useEffect, useState } from 'react'

type Props = PropsWithChildren<{
  waitForPageLoad?: boolean
}>

export const ClientSideOnly = ({ children, waitForPageLoad }: Props) => {
  const [hasMounted, setHasMounted] = useState(false)

  const setAsMounted = useCallback(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!waitForPageLoad) {
      setAsMounted()
    } else if (document.readyState === 'complete') {
      setAsMounted()
    } else {
      window.addEventListener('DOMContentLoaded', setAsMounted)

      return () => removeEventListener('DOMContentLoaded', setAsMounted)
    }
  }, [setAsMounted, waitForPageLoad])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
