module.exports = {
    extends: [
             'plugin:@typescript-eslint/recommended',
             'plugin:@typescript-eslint/recommended-requiring-type-checking',
             'airbnb-typescript'
    ],
    plugins: ["@typescript-eslint"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
    },
}