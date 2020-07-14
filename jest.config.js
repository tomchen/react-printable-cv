module.exports = {
  testRegex: '((\\.|/*.)(spec|test))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>__tests__/setup/setupEnzyme.js'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^Src(.*)$': '<rootDir>/src$1',
    '^Data(.*)$': '<rootDir>/data$1',
    '^Settings(.*)$': '<rootDir>/settings$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss|less)$': 'identity-obj-proxy',
  },
}
