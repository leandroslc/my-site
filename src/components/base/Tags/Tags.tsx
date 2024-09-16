import { useTranslation } from '@/src/hooks/useTranslation'
import S from './Tags.module.css'

type Props = {
  tags?: string[]
}

export const Tags = ({ tags }: Props) => {
  const { translate } = useTranslation()

  return (
    <div className={S.tags}>
      {tags?.map((tag) => (
        <span
          className={S.tag}
          key={tag}
          title={translate('base.tag-title', tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
