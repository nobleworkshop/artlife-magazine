import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import importX from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import securityPlugin from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
// import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -------------------------
// БАЗОВЫЕ ПРАВИЛА JS
// -------------------------
const baseRules = {
	semi: ['error', 'always'],
	quotes: ['error', 'single', { avoidEscape: true }],
	'no-var': 'error',
	'prefer-const': ['error', { destructuring: 'all' }],
	// Отключаем базовое правило: используем плагин unused-imports
	'no-unused-vars': 'warn',
	eqeqeq: ['error', 'always', { null: 'ignore' }],
	'no-console': ['warn', { allow: ['warn', 'error'] }],
	'object-shorthand': 'error',
	'prefer-template': 'error',
};

// -------------------------
// ИМПОРТЫ, СОРТИРОВКА, ЧИСТКА
// -------------------------
const importAndSortRules = {
	// import-x
	'import/first': 'error',
	'import/no-duplicates': 'error',
	'import/newline-after-import': 'error',
	// 'import/no-unresolved': 'error',
	'import/no-extraneous-dependencies': [
		'error',
		{
			devDependencies: [
				'**/*.test.*',
				'**/tests/**',
				'**/*.config.*',
				'**/*.stories.*',
				'scripts/**',
			],
		},
	],

	// simple-import-sort
	'simple-import-sort/imports': [
		'error',
		{
			groups: [
				['^react', '^next'], // React/Next
				['^@?\\w'], // npm-пакеты (@reduxjs/toolkit и т.п.)
				['^@($|/)'], // 👈 алиас '@' (например: "@/New")
				['^(@components|@lib|@utils)(/.*|$)'], // (опционально) частные алиасы
				['^src/'], // абсолюты от src, если используешь
				['^\\.\\.(?!/?$)', '^\\.\\./?$'], // ../ вверх
				['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // ./ локальные
				['\\.css$', '\\.scss$', '\\.(png|jpe?g|gif|svg|webp)$'], // стили и ассеты
			],
		},
	],
	'simple-import-sort/exports': 'error',
};

export default defineConfig([
	globalIgnores([
		// сборка и отчёты
		'dist/',
		'coverage/',
		'build/',
		'out/',
		// кэши/артефакты
		'.eslintcache',
		'node_modules/',
		'node_modules/.vite/',
		'.vite/',
		'.vitest/',
		'.playwright/',
		'test-results/',
		'playwright-report/',
		// логи и мусор ОС
		'*.log',
		'.DS_Store',
		// тестовые/е2е-папки (если не хотите линтить их)
		'**/*.test.js',
		'**/*.spec.js',
		'cypress/',
	]),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			// экосистема React
			react: reactPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			// доступность
			'jsx-a11y': jsxA11y,
			// импорт/сортировка/чистка
			import: importX,
			'simple-import-sort': simpleImportSort,
			// 'unused-imports': unusedImports,
			// прочее
			promise: promisePlugin,
			security: securityPlugin,
		},
		settings: {
			// Vite-резолвер первым — понимает /root-импорты и алиасы Vite
			'import/resolver': {
				vite: { project: __dirname },
				node: { extensions: ['.js', '.jsx', '.mjs', '.cjs', '.json'] },
			},

			// Какие расширения считаем "импортируемыми"
			'import/extensions': [
				'.js',
				'.jsx',
				'.mjs',
				'.cjs',
				'.json',
				'.svg',
			],
			// React-версию берём из пакета
			react: { version: 'detect' },
		},
		rules: {
			...baseRules,
			...importAndSortRules,
			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			// React Refresh (Vite HMR)
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			// React
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-key': 'error',
			'react/jsx-uses-vars': 'error', // ⬅️ помечает идентификаторы, встречающиеся в JSX, как "использованные"
			'react/no-unknown-property': 'error',
			'react/prop-types': 'off',
			// A11y (базовые)
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-is-valid': 'warn',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-proptypes': 'warn',
			'jsx-a11y/aria-unsupported-elements': 'warn',
			'jsx-a11y/label-has-associated-control': 'warn',
			'jsx-a11y/no-autofocus': 'warn',
			'jsx-a11y/no-distracting-elements': 'warn',
			'jsx-a11y/no-noninteractive-tabindex': 'warn',
			'jsx-a11y/role-has-required-aria-props': 'warn',
			'jsx-a11y/role-supports-aria-props': 'warn',
			'jsx-a11y/tabindex-no-positive': 'warn',

			// разрешаем импорты из devDependencies в этих файлах
			'import/no-extraneous-dependencies': [
				'error',
				{ devDependencies: true },
			],
		},

		// ВСТАВЛЯЕМ ПОСЛЕДНИМ: отключает конфликтующие стилистические правила
		extends: [eslintConfigPrettier],
	},
]);
