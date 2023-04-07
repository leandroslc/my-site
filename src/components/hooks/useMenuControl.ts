import { RefObject, useEffect, useState } from 'react'

type Props = {
  menuRef: RefObject<HTMLElement>
  toggleRef?: RefObject<HTMLElement>
}

export const useMenuControl = ({ menuRef, toggleRef }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOutsideClick = (event: MouseEvent) => {
    const element = event.target as Node

    if (
      toggleRef?.current?.contains(element) ||
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

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keyup', handleOutsideKeyPress)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keyup', handleOutsideKeyPress)
    }
  })

  return { isOpen, setIsOpen }
}
