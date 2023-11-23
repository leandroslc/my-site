import { join } from 'path'

export const postsDirectory = join(process.cwd(), process.env.POSTS_DIRECTORY!)

export const postsDataFilePath = join(
  process.cwd(),
  process.env.POSTS_DATA_DIRECTORY!,
)

export const translatedPagesDirectory = join(
  process.cwd(),
  'src',
  'locales',
  'pages',
)

export const baseUrl = process.env.BASE_URL!
