module.exports = {
  // Automatically clear mock calls and instances before every test
  clearMocks: true,

  // Collect coverage information from specific files
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],

  // Define the coverage report formats
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Automatically reset mock state before every test
  resetMocks: true,

  // Automatically restore mock state before every test
  restoreMocks: true,

  // Defines the test environment (e.g., jsdom for React projects)
  testEnvironment: 'jsdom',

  // Specifies the regex patterns Jest uses to detect test files
  testMatch: ['**/__tests__/*.test.js'],

  // A map from regular expressions to module names that allow for aliasing module imports
  //   moduleNameMapper: {
  //     '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  //   },

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // A list of paths to modules that run before each test file
  //   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Specifies the transformation of files before running tests
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
};
