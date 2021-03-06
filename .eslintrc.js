module.exports = {
    plugins: ['react', '@typescript-eslint', 'no-loops', 'prettier'],
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/react',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'react/prop-types': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'no-loops/no-loops': 2,
        'no-console': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
};
