import { test, expect, type Page } from '@playwright/test'

const assertPostPreviewIsVisible = async (
  page: Page,
  title: string,
  date: string,
  cover: string,
  topics: string[],
) => {
  const post = page.locator('article', {
    has: page.locator(`text=${title}`),
  })

  await expect(post.locator('h1', { hasText: title })).toBeVisible()
  await expect(post.locator('time', { hasText: date })).toBeVisible()

  for await (const topic of topics) {
    await expect(post.getByTitle(`${topic} topic`)).toBeVisible()
  }

  const coverImage = post.locator('img')
  await expect(coverImage).toBeVisible()
  await expect(coverImage).toHaveAttribute('src', cover)
}

test.beforeEach(async ({ page }) => {
  await page.goto('/posts')
})

test.describe('Home', () => {
  test('Should show all post previews', async ({ page }) => {
    await assertPostPreviewIsVisible(
      page,
      'Hello world: Announcing my new site',
      '16 march 2020',
      '/assets/blog/hello-world/cover.jpg',
      ['Hello', 'Test'],
    )

    await assertPostPreviewIsVisible(
      page,
      'A tool vs another new tool',
      '10 may 2022',
      '/assets/blog/tool-vs-tool/cover.jpg',
      ['Tools'],
    )
  })

  test('Should only show matched search posts', async ({ page }) => {
    const searchInput = page.locator('input[type=search]')

    await searchInput.fill('ano')

    await assertPostPreviewIsVisible(
      page,
      'A tool vs another new tool',
      '10 may 2022',
      '/assets/blog/tool-vs-tool/cover.jpg',
      ['Tools'],
    )

    await expect(
      page.locator('h1', { hasText: 'Hello world: Announcing my new site' }),
    ).toBeHidden()
  })

  test('Should navigate to post when clicking post preview', async ({
    page,
  }) => {
    const link = page.locator('a', {
      has: page.locator('h1', { hasText: /Hello world:/i }),
    })

    await link.click()

    await page.waitForURL('/posts/hello-world', {
      timeout: 10 * 1000,
    })

    await expect(page.locator('h1', { hasText: 'Hello World' })).toBeVisible()
  })
})
