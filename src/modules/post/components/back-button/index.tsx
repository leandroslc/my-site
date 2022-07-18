import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import * as S from './styles'

export const BackButton = () => {
  return (
    <Link as="/" href="/" passHref>
      <S.Button>
        <FiArrowLeft aria-hidden="true" />
        <span>Voltar para o início</span>
      </S.Button>
    </Link>
  )
}
