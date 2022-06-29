import fs from 'fs'
import { postsDirectory } from '../config'

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}
