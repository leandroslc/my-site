import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/terms-of-use')
})

test.describe('Terms of Use', () => {
  test('Should show terms of use page', async ({ page }) => {
    const expectedTitle = 'Terms of Use'

    const content = page.locator('main', { hasText: expectedTitle })

    await expect(
      content.getByRole('heading', { name: expectedTitle }),
    ).toBeVisible()
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
