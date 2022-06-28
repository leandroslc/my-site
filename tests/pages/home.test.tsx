import { render, screen } from '@testing-library/react'
import { Post } from '@/src/lib/types'
import { ThemeProvider } from '@/src/modules/app'
import Home from '@/src/pages/index'

const samplePost: Post = {
  title: 'Sample Post',
  slug: 'sample-post',
  excerpt: 'A simple sample post',
  date: new Date().toISOString(),
  coverImage: '/assets/imgs/sample-post.png',
  content: 'Sample',
  ogImage: {
    url: '',
  },
}

global.matchMedia = jest.fn().mockImplementation(() => ({ matches: false }))

const arrange = (posts: Post[]) => {
  return render(
    <ThemeProvider>
      <Home allPosts={posts} />
    </ThemeProvider>
  )
}

describe('page: Home', () => {
  test('Should render post preview', () => {
    const postA: Post = {
      ...samplePost,
      date: new Date(2012, 12 - 1, 12).toISOString(),
    }

    arrange([postA])

    expect(screen.getByText(postA.title)).toBeVisible()
    expect(screen.getByText(postA.excerpt)).toBeVisible()
    expect(screen.getByText(/12 de dezembro de 2012/i)).toBeVisible()

    const coverImage = screen.getByAltText(
      /image de capa para/i
    ) as HTMLImageElement

    expect(coverImage).toBeVisible()
    expect(coverImage.src).toContain(postA.coverImage)
  })
})
