import { FiSearch } from 'react-icons/fi'
import * as S from './SearchBox.styles'

type Props = {
  label: string
}

export const SearchBox = ({ label }: Props) => {
  return (
    <>
      <label className="sr-only">{label}</label>
      <S.SearchBox>
        <S.SearchBoxIcon as={FiSearch} aria-hidden="true" />
        <S.SearchBoxInput
          type="search"
          autoComplete="off"
          name="search"
          placeholder={label}
        />
      </S.SearchBox>
    </>
  )
}
