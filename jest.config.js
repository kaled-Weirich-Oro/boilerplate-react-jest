module.exports = {
    testPathIgnorePatterns: [
        '/.husky/',
        '/.storybook/',
        '/.vscode/',
        '/coverage/',
        '/generators/',
        '/node_modules/'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/fileTransformer.js'
    },
    collectCoverage: false,
    collectCoverageFrom: ['src/components/**/*.js', '!src/**/*.stories.js'],
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src/']
}
