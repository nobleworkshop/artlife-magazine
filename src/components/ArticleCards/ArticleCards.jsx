import { useMemo } from 'react';

import { useApi } from '../../hooks/useApi';
import ArticleCard from '../ArticleCard/ArticleCard';

import styles from './articleCards.module.css';

const ArticleCards = ({ selectedCategories = [] }) => {
	const { data: articles, loading, error } = useApi('articles');

	const filteredArticles = useMemo(() => {
		if (!articles || !Array.isArray(articles)) return [];

		let filtered = articles.slice().reverse();

		// Если выбраны категории, фильтруем статьи
		if (selectedCategories.length > 0) {
			filtered = filtered.filter((article) => {
				const articleCategory = article.badgeName?.toLowerCase();
				return selectedCategories.includes(articleCategory);
			});
		}

		return filtered;
	}, [articles, selectedCategories]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!articles) return <div>No articles found</div>;

	return (
		<section className={styles.articles}>
			<div className={styles.articles__grid}>
				{filteredArticles.length > 0 ? (
					filteredArticles.map((article) => (
						<ArticleCard
							key={article.id}
							img={article.img}
							title={article.title}
							text={article.text}
							authorName={article.authorName}
							date={article.date}
							timeToRead={article.timeToRead}
							badgeName={article.badgeName}
							badgeLink={article.badgeLink}
						/>
					))
				) : (
					<div>No articles found for selected categories</div>
				)}
			</div>
		</section>
	);
};

export default ArticleCards;
