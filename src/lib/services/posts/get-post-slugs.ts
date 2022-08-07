import fs from 'fs'
import { postsDirectory } from '@/src/lib/config'

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}
