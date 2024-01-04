module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    'src/hooks/**/*.ts(x)?',
    'src/pages/**/*.ts(x)?',
    'src/services/*.ts',
    '!**/*.d.ts',
    '!<rootDir>/src/**/main.tsx',
    '!<rootDir>/src/**/index.ts',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/config/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
}
