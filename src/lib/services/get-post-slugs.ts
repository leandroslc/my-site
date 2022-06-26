import fs from 'fs'
import { POSTS_DIRECTORY } from '../constants'

export const getPostSlugs = () => {
  return fs.readdirSync(POSTS_DIRECTORY)
}
