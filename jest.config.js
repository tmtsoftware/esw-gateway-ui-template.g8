module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  preset: 'ts-jest',
  testRegex: ['(/test/*.*|(.|/)(test|spec)).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  testPathIgnorePatterns: ['test/*.*/__snapshots__/*'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  verbose: true
}
