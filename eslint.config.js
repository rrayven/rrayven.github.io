import js from '@eslint/js';
import globals from 'globals';
import css from '@eslint/css';
import markdown from '@eslint/markdown';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import pluginJsonc from 'eslint-plugin-jsonc';
import html from '@html-eslint/eslint-plugin';
import reactDom from 'eslint-plugin-react-dom';
import stylistic from '@stylistic/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist', 'pnpm-lock.yaml']),

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            stylistic.configs.customize({
                indent: 4,
                quotes: 'single',
                semi: true,
                jsx: true,
                braceStyle: '1tbs',
                commaDangle: 'always-multiline',
            }),
        ],
        rules: {
            // stylistic
            '@stylistic/max-statements-per-line': 'off',
            '@stylistic/space-before-function-paren': ['error', 'always'],
            '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
            '@stylistic/jsx-quotes': ['error', 'prefer-single'],
        },
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        files: ['eslint.config.js'],
        languageOptions: {
            globals: globals.node,
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            reactX.configs['recommended-typescript'],
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // typescript
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        },
    },
    {
        files: ['**/*.json'],
        languageOptions: {
            parser: jsoncParser,
        },
        plugins: {
            jsonc: pluginJsonc,
        },
        rules: {
            'jsonc/indent': ['error', 4],
            'jsonc/quotes': ['error', 'double'],
        },
    },
    {
        files: ['**/*.css'],
        plugins: { css },
        language: 'css/css',
        extends: ['css/recommended'],
    },
    {
        files: ['**/*.html'],
        plugins: { html },
        language: 'html/html',
        extends: [html.configs['flat/recommended']],
        rules: {
            'html/no-duplicate-class': 'error',
            'html/indent': ['error', 4],
        },
    },
    {
        files: ['**/*.md'],
        plugins: {
            markdown,
        },
        extends: ['markdown/recommended'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx,json,css,html,md}'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/no-multiple-empty-lines': ['error', { maxEOF: 0, maxBOF: 0 }],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/linebreak-style': ['warn', 'unix'],
        },
    },
]);
