module.exports = {
    extends: ['airbnb-base'],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    rules: {
        eqeqeq: "error"
    }
}