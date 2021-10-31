module.exports = {
  moduleNameMapper: {
    // '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@modules/(.*)': '<rootDir>/src/app/modules/$1',
    '@environment/(.*)': '<rootDir>/src/environment/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@helpers/(.*)': '<rootDir>/src/app/helpers/$1',
    '@models/(.*)': '<rootDir>/src/app/models/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ngrx))'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
