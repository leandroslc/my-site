const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.',
})

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

module.exports = createJestConfig(jestConfig)
