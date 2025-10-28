import Article from '../../components/Article/Article';
import LinkTo from '../../components/LinkTo/LinkTo';
import { useApi } from '../../hooks/useApi';

import styles from './articlesSection.module.css';

const ArticlesSection = () => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!articles) return <div>No articles found</div>;

	// Get first 6 articles
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
