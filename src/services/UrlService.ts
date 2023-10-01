import { baseUrl } from '@/src/config/config'

export const makeAbsoluteUrl = (relativeUrl: string) => {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot make absolute url in client')
  }

  const path = relativeUrl.startsWith('/') ? relativeUrl : '/' + relativeUrl

  return `${baseUrl}${path}`
}
