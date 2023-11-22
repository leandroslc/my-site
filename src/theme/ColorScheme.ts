export { dark } from './colors/dark'
export { light } from './colors/light'

type Color = string

export type ColorScheme = {
  all: {
    outline: Color
    outlineInset: Color
    selection: {
      back: Color
      text: Color
    }
  }
  contentElements: {
    link: Color
    code: {
      back: Color
      text: Color
    }
    codeBlock: {
      selection: {
        back: Color
        text: Color
      }
    }
  }
  elements: {
    emphasys: Color
    emphasys30: Color
  }
  header: {
    back: Color
    text: Color
    painting: {
      filter: Color
    }
  }
  main: {
    back: Color
  }
  footer: {
    back: Color
    text: Color
    textHover: Color
    divider: Color
  }
  body: {
    back: Color
    text: Color
    contrast: Color
  }
  dropdown: {
    button: {
      back: Color
      text: Color
      shadowRing: Color
      shadow: Color
    }
    menu: {
      back: Color
      backFull: Color
      border: Color
      text: Color
      shadowRing: Color
      shadow: Color
    }
    item: {
      backActive: Color
      textActive: Color
      backHover: Color
      textHover: Color
    }
  }
  postCard: {
    borderHover: Color
  }
  post: {
    tag: {
      back: Color
      text: Color
    }
  }
  posts: {
    search: {
      back: Color
      placeholder: Color
      border: Color
      borderHover: Color
      shadowHover: Color
    }
    noResults: {
      back: Color
    }
  }
}
