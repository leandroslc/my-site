import S from './FormattedContentBody.module.css'

type Props = {
  content: string
}

export const FormattedContentBody = ({ content }: Props) => {
  return (
    <main
      className={S.container}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
