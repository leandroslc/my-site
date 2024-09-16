import React, { PropsWithChildren, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useMenuControl } from '@/src/hooks/useMenuControl'
import { useTranslation } from '@/src/hooks/useTranslation'
import { DropdownItem } from '../DropdownItem'
import S from './DrilldownItem.module.css'

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
  const { translate } = useTranslation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const { isOpen, setIsOpen } = useMenuControl({ menuRef, toggleRef })

  const handleItemClick = () => {
    setIsOpen(true)
  }

  const handleBackClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <DropdownItem
        ref={toggleRef}
        as="button"
        type="button"
        id={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={title}
        onClick={handleItemClick}
      >
        <div className={S.itemLabel}>
          {label}
          <FiChevronRight className={S.itemLabelChevron} aria-hidden="true" />
        </div>
      </DropdownItem>
      <div
        ref={menuRef}
        aria-orientation="vertical"
        aria-labelledby={id}
        className={[S.menu, isOpen ? S.isOpen : ''].join(' ')}
      >
        <DropdownItem
          as="button"
          type="button"
          id={id}
          title={backButtonTitle}
          onClick={handleBackClick}
        >
          <FiChevronLeft className={S.backButtonIcon} aria-hidden="true" />
          {translate('base.drilldown-item-back')}
        </DropdownItem>
        <div className={S.divider} />
        {children}
      </div>
    </>
  )
}
