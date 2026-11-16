/** @type {import('jest').Config} */
const config = {
  globals: { IS_REACT_ACT_ENVIRONMENT: true },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
          module: 'commonjs',
          moduleResolution: 'bundler',
          skipLibCheck: true,
          types: ['jest'],
        },
      },
    ],
  },
  moduleNameMapper: {
    // Source imports end in .js so the ESM build runs in Node; point them back at the .ts files.
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@public-information-symbols/core$': '<rootDir>/../core/src/index.ts',
    '^@public-information-symbols/core/render$': '<rootDir>/../core/src/render.ts',
  },
};

module.exports = config;
