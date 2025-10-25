import { useEffect, useState } from 'react';

import { processDataArray } from '../utils/imageUtils';

/**
 * Хук для получения данных с API с обработкой изображений
 * @param {string} endpoint - эндпоинт API
 * @param {string} dataType - тип данных (authors, articles, podcasts)
 * @returns {Object} { data, loading, error }
 */
export function useApiWithImages(endpoint, dataType) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const API_BASE_URL =
					import.meta.env.VITE_API_URL || 'http://localhost:3001';
				const response = await fetch(`${API_BASE_URL}/${endpoint}`);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result = await response.json();

				// Обрабатываем данные для получения правильных путей к изображениям
				const processedData = processDataArray(result, dataType);
				setData(processedData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [endpoint, dataType]);

	return { data, loading, error };
}

/**
 * Хук для получения авторов с обработанными изображениями
 * @returns {Object} { authors, loading, error }
 */
export function useAuthors() {
	return useApiWithImages('authors', 'authors');
}

/**
 * Хук для получения статей с обработанными изображениями
 * @returns {Object} { articles, loading, error }
 */
export function useArticles() {
	return useApiWithImages('articles', 'articles');
}

/**
 * Хук для получения подкастов с обработанными изображениями
 * @returns {Object} { podcasts, loading, error }
 */
export function usePodcasts() {
	return useApiWithImages('podcasts', 'podcasts');
}
