import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const isCI = !!process.env.CI

const projects: PlaywrightTestConfig['projects'] = [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },
]

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: isCI,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects,
  webServer: {
    command: 'npm start',
    port: 3000,
    stdout: 'pipe',
    env: {
      NODE_ENV: 'test',
    },
  },
}

export default config
