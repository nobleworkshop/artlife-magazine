import { useApi } from '../../hooks/useApi';
import ArticleCard from '../ArticleCard/ArticleCard';

import styles from './articleCards.module.css';

const ArticleCards = () => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!articles) return <div>No articles found</div>;

	return (
		<section className={styles.articles}>
			<div className={styles.articles__grid}>
				{articles
					.slice()
					.reverse()
					.map((article) => (
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
					))}
			</div>
		</section>
	);
};

export default ArticleCards;
