import { useEffect, useState } from 'react'
import { FiBox } from 'react-icons/fi'
import {
  CodeHighlights,
  getCurrentCodeHighlight,
  setCurrentCodeHighlight,
  injectTheme,
} from '@/src/lib/services/code-service'
import { DropdownItem } from '@/src/components/base/DropdownItem'
import { DrilldownItem } from '@/src/components/base/DrilldownItem'
import { Option } from '../Option'
import * as S from './CodeOptions.styles'

export const CodeHighlightColors: { [key in CodeHighlights]: string } = {
  [CodeHighlights.Dracula]: '#f666c1',
  [CodeHighlights.NightOwl]: '#82dec9',
  [CodeHighlights.OneLight]: '#ffffff',
}

export const CodeOptions = () => {
  const [highlight, setHighlight] = useState(CodeHighlights.Dracula)

  const handleThemeChange = (highlight: CodeHighlights) => {
    setHighlight(highlight)
    setCurrentCodeHighlight(highlight)
  }

  const isActive = (currentHighlight: CodeHighlights) => {
    return highlight === currentHighlight
  }

  const getIconColor = (highlight: CodeHighlights) => {
    return isActive(highlight) ? undefined : CodeHighlightColors[highlight]
  }

  useEffect(() => {
    const currentTheme = getCurrentCodeHighlight()

    setHighlight(currentTheme)
    injectTheme(currentTheme)
  }, [])

  return (
    <DrilldownItem
      id="code-theme"
      label={
        <Option
          name="Code theme"
          description={highlight}
          icon={<FiBox color={CodeHighlightColors[highlight]} />}
        />
      }
    >
      <DropdownItem
        as="button"
        type="button"
        active={isActive(CodeHighlights.Dracula)}
        onClick={() => handleThemeChange(CodeHighlights.Dracula)}
      >
        <S.OptionItem>
          <S.OptionIcon
            as={FiBox}
            aria-hidden="true"
            color={getIconColor(CodeHighlights.Dracula)}
          />
          {CodeHighlights.Dracula}
        </S.OptionItem>
      </DropdownItem>
      <DropdownItem
        as="button"
        type="button"
        active={isActive(CodeHighlights.NightOwl)}
        onClick={() => handleThemeChange(CodeHighlights.NightOwl)}
      >
        <S.OptionItem>
          <S.OptionIcon
            as={FiBox}
            aria-hidden="true"
            color={getIconColor(CodeHighlights.NightOwl)}
          />
          {CodeHighlights.NightOwl}
        </S.OptionItem>
      </DropdownItem>
      <DropdownItem
        as="button"
        type="button"
        active={isActive(CodeHighlights.OneLight)}
        onClick={() => handleThemeChange(CodeHighlights.OneLight)}
      >
        <S.OptionItem>
          <S.OptionIcon
            as={FiBox}
            aria-hidden="true"
            color={getIconColor(CodeHighlights.OneLight)}
          />
          {CodeHighlights.OneLight}
        </S.OptionItem>
      </DropdownItem>
    </DrilldownItem>
  )
}
