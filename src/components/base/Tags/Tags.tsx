import { useTranslation } from '@/src/hooks/useTranslation'
import * as S from './Tags.styles'

type Props = {
  tags?: string[]
}

export const Tags = ({ tags }: Props) => {
  const { translate } = useTranslation()

  return (
    <S.Tags>
      {tags?.map((tag) => (
        <S.Tag key={tag} title={translate('base.tag-title', tag)}>
          {tag}
        </S.Tag>
      ))}
    </S.Tags>
  )
}
