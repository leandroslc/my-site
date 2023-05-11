import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

const isCI = !!process.env.CI

const env = dotenv.parse(
  fs.readFileSync(path.resolve(process.cwd(), '.env.test'))
)

const projects: PlaywrightTestConfig['projects'] = [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },
]

if (isCI) {
  projects.push({
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
    },
  })
}

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects,
  webServer: {
    command: 'npm run dev',
    port: 3000,
    env: {
      ...env,
      NODE_ENV: 'test',
    },
  },
}

export default config
