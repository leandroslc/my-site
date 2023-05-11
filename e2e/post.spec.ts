import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/posts/hello-world')
})

test.describe('Post', () => {
  test('Should show post page', async ({ page }) => {
    const expectedTitle = 'Hello world: Announcing my new site'
    const expectedDate = '16 march 2020'
    const expectedImage = '/assets/blog/hello-world/cover.jpg'
    const expectedText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

    const header = page.locator('header', {
      has: page.locator(`text=${expectedTitle}`),
    })

    await expect(header.locator('h1', { hasText: expectedTitle })).toBeVisible()

    await expect(
      header.locator('time', { hasText: expectedDate })
    ).toBeVisible()

    const coverImage = header.locator('img')
    await expect(coverImage).toBeVisible()
    await expect(coverImage).toHaveAttribute('src', expectedImage)

    const body = page.locator('p', {
      hasText: new RegExp(expectedText),
    })

    await expect(body).toBeVisible()
  })

  test('Should navigate to home when clicking back to home link', async ({
    page,
  }) => {
    const link = page.getByRole('link', {
      name: /Back to home/i,
    })

    await link.click()

    await page.waitForURL('/', {
      timeout: 10 * 1000,
    })
  })
})
