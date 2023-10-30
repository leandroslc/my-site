const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.',
})

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

module.exports = createJestConfig(jestConfig)
