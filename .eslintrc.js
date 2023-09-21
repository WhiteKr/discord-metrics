module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: [
        '.eslintrc.js',
        'prettier.config.js',
        'dist'
    ],
    plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never',
                josn: 'never'
            },
        ],
        'import-helpers/order-imports': [
            'error',
            {
                groups: ['module', '/^@/', ['parent', 'sibling', 'index']],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                newlinesBetween: 'always',
            },
        ],
        '@typescript-eslint/naming-convention': 'warn',
        'no-case-declarations': 'off',
        'consistent-return': 'off',
        "no-console": 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'jsx-filename-extension': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'no-restricted-syntax': 'off'
    },
};
