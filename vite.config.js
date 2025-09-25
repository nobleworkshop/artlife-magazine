import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@uikit': path.resolve(__dirname, './src/uikit-components'),
			'@img': path.resolve(__dirname, './src/img'),
		},
	},
});
