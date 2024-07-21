import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FiSearch } from 'react-icons/fi'
import S from './SearchBox.module.css'

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
}

export const SearchBox = ({ label, ...otherProps }: Props) => {
  return (
    <>
      <label className="sr-only">{label}</label>
      <div className={S.searchBox}>
        <FiSearch className={S.searchBoxIcon} aria-hidden="true" />
        <input className={S.searchBoxInput}
          type="search"
          autoComplete="off"
          name="search"
          placeholder={label}
          {...otherProps}
        />
      </div>
    </>
  )
}
