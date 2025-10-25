/**
 * Утилиты для работы с изображениями из JSON сервера
 */

// Маппинг названий обложек подкастов на пути к изображениям
const PODCAST_COVER_MAP = {
	cover1: '/img/podcast-covers/small/01.jpg',
	cover2: '/img/podcast-covers/small/02.jpg',
	cover3: '/img/podcast-covers/cover3.png',
	cover4: '/img/podcast-covers/cover4.png',
	cover5: '/img/podcast-covers/cover5.png',
};

/**
 * Получить путь к изображению обложки подкаста
 * @param {string} coverName - название обложки (cover1, cover2, etc.)
 * @returns {string} путь к изображению
 */
export const getPodcastCoverImage = (coverName) => {
	return PODCAST_COVER_MAP[coverName] || '/img/podcast-covers/cover3.png';
};

/**
 * Получить путь к изображению автора
 * @param {string|number} authorId - ID автора
 * @returns {string} путь к изображению автора
 */
export const getAuthorImage = (authorId) => {
	return `/img/authors/${authorId}.png`;
};

/**
 * Получить путь к изображению статьи
 * @param {string|number} articleId - ID статьи
 * @returns {string} путь к изображению статьи
 */
export const getArticleImage = (articleId) => {
	return `/img/article-images/${articleId}.png`;
};

/**
 * Получить путь к изображению по типу и ID
 * @param {string} type - тип изображения (podcast, author, article)
 * @param {string|number} id - ID или название
 * @returns {string} путь к изображению
 */
export const getImageByType = (type, id) => {
	switch (type) {
		case 'podcast':
			return getPodcastCoverImage(id);
		case 'author':
			return getAuthorImage(id);
		case 'article':
			return getArticleImage(id);
		default:
			return '/img/placeholder.png';
	}
};

/**
 * Проверить существование изображения
 * @param {string} imagePath - путь к изображению
 * @returns {Promise<boolean>} существует ли изображение
 */
export const checkImageExists = async (imagePath) => {
	try {
		const response = await fetch(imagePath, { method: 'HEAD' });
		return response.ok;
	} catch {
		return false;
	}
};

/**
 * Получить изображение с fallback
 * @param {string} primaryPath - основной путь
 * @param {string} fallbackPath - резервный путь
 * @returns {Promise<string>} рабочий путь к изображению
 */
export const getImageWithFallback = async (
	primaryPath,
	fallbackPath = '/img/placeholder.png',
) => {
	const exists = await checkImageExists(primaryPath);
	return exists ? primaryPath : fallbackPath;
};

/**
 * Обработать данные автора для получения правильного пути к изображению
 * @param {Object} author - объект автора из API
 * @returns {Object} автор с обработанным путем к изображению
 */
export const processAuthorData = (author) => {
	return {
		...author,
		img: author.img || getAuthorImage(author.id),
	};
};

/**
 * Обработать данные статьи для получения правильного пути к изображению
 * @param {Object} article - объект статьи из API
 * @returns {Object} статья с обработанным путем к изображению
 */
export const processArticleData = (article) => {
	return {
		...article,
		img: article.img || getArticleImage(article.id),
		authorPhoto:
			article.authorPhoto || getAuthorImage(article.authorId || 1),
	};
};

/**
 * Обработать данные подкаста для получения правильного пути к изображению
 * @param {Object} podcast - объект подкаста из API
 * @returns {Object} подкаст с обработанным путем к изображению
 */
export const processPodcastData = (podcast) => {
	return {
		...podcast,
		coverImage: getPodcastCoverImage(podcast.cover),
	};
};

/**
 * Обработать массив данных для получения правильных путей к изображениям
 * @param {Array} data - массив данных
 * @param {string} type - тип данных (author, article, podcast)
 * @returns {Array} обработанный массив данных
 */
export const processDataArray = (data, type) => {
	if (!Array.isArray(data)) return [];

	switch (type) {
		case 'authors':
			return data.map(processAuthorData);
		case 'articles':
			return data.map(processArticleData);
		case 'podcasts':
			return data.map(processPodcastData);
		default:
			return data;
	}
};

// Константы для часто используемых изображений
export const IMAGES = {
	ARROW: '/img/arrow.svg',
	LOGO: '/img/logo.svg',
	MAGAZINE_COVER: '/img/magazin-cover.png',
	LEAD_ARTICLE: '/img/leadArticle-img.png',
	POST_IMG: '/img/post-img.png',
	DIOGO: '/img/diogo.png',
	ART_LIFE: '/img/Art&Life.jpg',
	LINE: '/img/line.png',

	// Социальные иконки
	SOCIAL: {
		INSTAGRAM: '/img/social/instagram.svg',
		TWITTER: '/img/social/twitter.svg',
		YOUTUBE: '/img/social/youtube.svg',
		RSS: '/img/social/rss.svg',
	},

	// Заголовки
	HEADER_TITLES: {
		ART_LIFE: '/img/header-titles/art&life.svg',
		AUTHORS: '/img/header-titles/authors.svg',
		MAGAZINE: '/img/header-titles/magazine.svg',
		PODCAST: '/img/header-titles/podcast.svg',
	},

	// Стрелки
	ARROWS: {
		LEFT: '/img/link-arrow--left.svg',
		RIGHT: '/img/link-arrow--right.svg',
	},
};
