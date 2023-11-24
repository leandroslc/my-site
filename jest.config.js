const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.',
})

/** @type {import('jest').Config} */
const jestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

module.exports = createJestConfig(jestConfig)
