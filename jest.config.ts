import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  moduleNameMapper: { '\\.css$': '<rootDir>/__mocks__/styleMock.js' },
};

export default config;
