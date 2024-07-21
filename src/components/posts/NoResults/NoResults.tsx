import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FiFolder, FiSearch } from 'react-icons/fi'
import { useTranslation } from '@/src/hooks/useTranslation'
import S from './NoResults.module.css'

type Props = Pick<HTMLAttributes<HTMLElement>, 'hidden'>

const InnerNoResults = (props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { translate } = useTranslation()

  return (
    <div className={S.container} {...props} ref={ref as React.RefObject<never>}>
      <div className={S.iconContainer} aria-hidden="true">
        <FiFolder className={S.icon} />
        <FiSearch className={S.aboveIcon} />
      </div>
      <p className={S.text}>{translate('posts.nothing-found')}</p>
    </div>
  )
}

export const NoResults = forwardRef(InnerNoResults)
