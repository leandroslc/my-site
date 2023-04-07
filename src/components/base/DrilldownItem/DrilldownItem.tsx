import React, { PropsWithChildren, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useMenuControl } from '@/src/components/hooks/useMenuControl'
import { DropdownItem } from '../DropdownItem'
import * as S from './DrilldownItem.styles'

type Props = PropsWithChildren<{
  id: string
  label: string | React.ReactNode
  title?: string
  backButtonTitle?: string
}>

export const DrilldownItem = ({
  children,
  id,
  title,
  label,
  backButtonTitle,
}: Props) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useMenuControl({ menuRef })

  const handleItemClick = () => {
    setIsOpen(true)
  }

  const handleBackClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <DropdownItem
        as="button"
        type="button"
        id={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={title}
        onClick={handleItemClick}
      >
        <S.ItemLabel>
          {label}
          <S.ItemLabelChevron as={FiChevronRight} />
        </S.ItemLabel>
      </DropdownItem>
      <S.Menu
        ref={menuRef}
        aria-orientation="vertical"
        aria-labelledby={id}
        className={isOpen ? 'is-open' : ''}
      >
        <DropdownItem
          as="button"
          type="button"
          id={id}
          title={backButtonTitle}
          onClick={handleBackClick}
        >
          <S.BackButtonIcon as={FiChevronLeft} />
          Back
        </DropdownItem>
        <S.Divider />
        {children}
      </S.Menu>
    </>
  )
}
