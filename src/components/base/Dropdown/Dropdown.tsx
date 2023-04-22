import React, { PropsWithChildren, useRef } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { usePopper } from 'react-popper'
import { useMenuControl } from '@/src/hooks/useMenuControl'
import * as S from './Dropdown.styles'

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
      <S.Button
        id={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={title}
        onClick={handleToggleClick}
        ref={toggleRef}
      >
        {label}
        <S.ButtonChevron
          as={isOpen ? FiChevronUp : FiChevronDown}
          aria-hidden="true"
        />
      </S.Button>
      <S.Menu
        ref={menuRef}
        style={styles.popper}
        aria-orientation="vertical"
        aria-labelledby={id}
        className={isOpen ? 'is-open' : ''}
        {...attributes.popper}
      >
        {children}
      </S.Menu>
    </>
  )
}
