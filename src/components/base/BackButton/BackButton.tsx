import { FiArrowLeft } from 'react-icons/fi'
import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './BackButton.styles'

export const BackButton = () => {
  const { translate } = useTranslation()

  return (
    <S.Button href="/" passHref>
      <FiArrowLeft aria-hidden="true" />
      <span>{translate('base.back-to-home')}</span>
    </S.Button>
  )
}
