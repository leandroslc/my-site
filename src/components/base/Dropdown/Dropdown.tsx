import React, { PropsWithChildren, useRef } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { usePopper } from 'react-popper'
import { useMenuControl } from '@/src/hooks/useMenuControl'
import S from './Dropdown.module.css'

type Props = PropsWithChildren<{
  id: string
  label: string | React.ReactNode
  title?: string
}>

export const Dropdown = ({ children, id, label, title }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const { isOpen, setIsOpen } = useMenuControl({ menuRef, toggleRef })

  const { styles, attributes } = usePopper(toggleRef.current, menuRef.current, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 5],
        },
      },
    ],
  })

  const handleToggleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        id={id}
        className={S.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={title}
        onClick={handleToggleClick}
        ref={toggleRef}
      >
        {label}
        <FiChevronUp
          className={[S.buttonChevron, isOpen ? '' : S.hidden].join(' ')}
          aria-hidden="true"
        />
        <FiChevronDown
          className={[S.buttonChevron, isOpen ? S.hidden : ''].join(' ')}
          aria-hidden="true"
        />
      </button>
      <div
        ref={menuRef}
        style={styles.popper}
        aria-orientation="vertical"
        aria-labelledby={id}
        className={[S.menu, isOpen ? S.isOpen : ''].join(' ')}
        {...attributes.popper}
      >
        {children}
      </div>
    </>
  )
}
