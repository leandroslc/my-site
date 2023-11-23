import { join, resolve } from 'path'

export const postsDirectory = join(process.cwd(), process.env.POSTS_DIRECTORY!)

export const translatedPagesDirectory = join(
  process.cwd(),
  process.env.TRANSLATED_PAGE_LOCALES_DIRECTORY ?? '',
)

// 'resolve' with a path as string constant instructs the build to
// copy the given path to output
export const postsDataFilePath = resolve(
  './_posts/data',
  process.env.POSTS_DATA_RELATIVE_DIRECTORY ?? '',
)

export const baseUrl = process.env.BASE_URL!
