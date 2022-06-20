import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import * as S from './styles'

type Props = PropsWithChildren<{
  id: string
  label: string
  title?: string
}>

export const Dropdown = ({ children, id, label, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

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

  const handleOutsideClick = (event: MouseEvent) => {
    const element = event.target as Node

    if (
      toggleRef.current?.contains(element) ||
      menuRef.current?.contains(element)
    ) {
      return
    }

    setTimeout(() => setIsOpen(false), 1)
  }

  const handleOutsideKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
    }
  }

  const handleToggleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keyup', handleOutsideKeyPress)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keyup', handleOutsideKeyPress)
    }
  })

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
      </S.Button>
      <S.Menu
        ref={menuRef}
        style={styles.popper}
        aria-orientation="vertical"
        aria-labelledby={id}
        $isOpen={isOpen}
        {...attributes.popper}
      >
        {children}
      </S.Menu>
    </>
  )
}
