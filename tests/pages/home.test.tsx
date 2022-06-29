import { screen } from '@testing-library/react'
import { Post } from '@/src/lib/types'
import Home from '@/src/pages/index'
import { arrangeWindowMatchMedia, renderWithProviers } from '@/tests/utils'

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

arrangeWindowMatchMedia(false)

const arrange = (posts: Post[]) => {
  return renderWithProviers(<Home allPosts={posts} />)
}

describe('page: Home', () => {
  test('Should render post preview', () => {
    const post: Post = {
      ...samplePost,
      date: new Date(2012, 12 - 1, 12).toISOString(),
    }

    // Act
    arrange([post])

    // Assert
    expect(screen.getByText(post.title)).toBeVisible()
    expect(screen.getByText(post.excerpt)).toBeVisible()
    expect(screen.getByText(/12 de dezembro de 2012/i)).toBeVisible()

    const coverImage = screen.getByAltText(
      /image de capa para/i
    ) as HTMLImageElement

    expect(coverImage).toBeVisible()
    expect(coverImage.src).toContain(post.coverImage)
  })

  test('Should render multiple post previews', () => {
    const posts = [
      { ...samplePost, title: 'Sample post One' },
      { ...samplePost, title: 'Sample post Two' },
      { ...samplePost, title: 'Sample post Three' },
    ]

    // Act
    arrange(posts)

    // Assert
    expect(screen.getByText(/sample post one/i)).toBeVisible()
    expect(screen.getByText(/sample post two/i)).toBeVisible()
    expect(screen.getByText(/sample post three/i)).toBeVisible()
  })
})
