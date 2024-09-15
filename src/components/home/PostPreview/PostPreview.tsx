import Link from 'next/link'
import { useRouter } from 'next/router'
import { Tags } from '@/src/components/base/Tags'
import { formatDate } from '@/src/helpers/FormatDateHelpers'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { useTranslation } from '@/src/hooks/useTranslation'
import S from './PostPreview.module.css'

type Props = {
  post: BlogPostPreview
}

export const PostPreview = ({ post }: Props) => {
  const { slug, coverImage, title, date } = post
  const { locale } = useRouter()
  const { translate } = useTranslation()

  return (
    <Link
      className={S.postLink}
      href={`/posts/${slug}`}
      passHref
      aria-label={title}
    >
      <article className={S.card} key={slug}>
        <header className={S.header}>
          <img
            className={S.image}
            src={coverImage}
            alt={`${translate('home.blog-post-image-alt')} ${title}`}
          />
        </header>
        <main className={S.content}>
          <time className={S.date} dateTime={date}>
            {formatDate(date, locale!)}
          </time>
          <h1 className={S.title}>{title}</h1>
          <Tags tags={post.tags} />
        </main>
      </article>
    </Link>
  )
}
