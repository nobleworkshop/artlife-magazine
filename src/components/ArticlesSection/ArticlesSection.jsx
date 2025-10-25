import { useArticles } from '../../hooks/useApiWithImages';
import Article from '../Article/Article';
import LinkTo from '../LinkTo/LinkTo';

import styles from './articlesSection.module.css';

const ArticlesSection = () => {
	const { data: articles, loading, error } = useArticles();

	if (loading) return <div>Loading articles...</div>;
	if (error) return <div>Error loading articles: {error}</div>;
	if (!articles || articles.length === 0) return <div>No articles found</div>;

	// Берем первые 6 статей для отображения
	const displayArticles = articles.slice(0, 6);

	return (
		<div className={styles.wraper}>
			<div className={styles.list}>
				{displayArticles.map((article) => (
					<Article
						key={article.id}
						img={article.img}
						title={article.title}
						text={article.desc}
						autor={article.authorName}
						date={article.date}
						timeToRead={article.timeToRead}
						badgeName={article.badgeName}
						badgeLink={article.badgeLink}
					/>
				))}
			</div>
			<div className={styles.more}>
				<LinkTo
					title="all articles"
					link="/articles"
					direction="right"
				/>
			</div>
		</div>
	);
};

export default ArticlesSection;
