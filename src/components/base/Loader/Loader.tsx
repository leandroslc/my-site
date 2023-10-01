import { useEffect, useState } from 'react'
import * as S from './Loader.styles'

export const Loader = () => {
  const [currentState, setCurrentState] = useState('')

  const markAsDone = () => {
    setCurrentState('removing')
    setTimeout(() => setCurrentState('done'), 1000)
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      markAsDone()
    } else {
      window.addEventListener('DOMContentLoaded', markAsDone)

      return () => window.removeEventListener('DOMContentLoaded', markAsDone)
    }
  }, [])

  return (
    <S.Container className={currentState}>
      <S.Spinner />
    </S.Container>
  )
}
