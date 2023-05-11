import { test, expect, type Page } from '@playwright/test'

const COMMON_EXCERPT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...'

const assertPostPreviewIsVisible = async (
  page: Page,
  title: string,
  date: string,
  cover: string
) => {
  const post = page.locator('article', {
    has: page.locator(`text=${title}`),
  })

  await expect(post.locator('h1', { hasText: title })).toBeVisible()
  await expect(post.locator('time', { hasText: date })).toBeVisible()
  await expect(post.locator(`text=${COMMON_EXCERPT}`)).toBeVisible()

  const coverImage = post.locator('img')
  await expect(coverImage).toBeVisible()
  await expect(coverImage).toHaveAttribute('src', cover)
}

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Home', () => {
  test('Should show post previews', async ({ page }) => {
    await assertPostPreviewIsVisible(
      page,
      'Hello world: Announcing my new site',
      '16 march 2020',
      '/assets/blog/hello-world/cover.jpg'
    )

    await assertPostPreviewIsVisible(
      page,
      'A tool vs another new tool',
      '10 may 2022',
      '/assets/blog/tool-vs-tool/cover.jpg'
    )
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
  })
})
