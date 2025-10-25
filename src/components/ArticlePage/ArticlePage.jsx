import { useApi } from '../../hooks/useApi';
import { processArticleData } from '../../utils/imageUtils';
import Badge from '../Badge/Badge';
import DetailsItem from '../DetailsItem/DetailsItem';
import LinkTo from '../LinkTo/LinkTo';
import ReturnNavigation from '../ReturnNavigation/ReturnNavigation';

import styles from './articlePage.module.css';

const ArticlePage = ({ articleId }) => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading) return <div>Loading article...</div>;
	if (error) return <div>Error loading article: {error}</div>;
	if (!articles || articles.length === 0) return <div>No articles found</div>;

	// Находим статью по ID
	const article = articles.find((a) => a.id === parseInt(articleId));
	if (!article) return <div>Article not found</div>;

	// Обрабатываем данные статьи для получения правильных путей к изображениям
	const processedArticle = processArticleData(article);

	return (
		<div className={styles.articlePage}>
			<ReturnNavigation />

			<div className={styles.articleHeader}>
				<div className={styles.badge}>
					<Badge
						name={processedArticle.badgeName}
						link={processedArticle.badgeLink}
					/>
				</div>

				<h1 className={styles.title}>{processedArticle.title}</h1>

				<div className={styles.meta}>
					<DetailsItem
						title="Author"
						value={processedArticle.authorName}
					/>
					<DetailsItem title="Date" value={processedArticle.date} />
					<DetailsItem
						title="Time to read"
						value={processedArticle.timeToRead}
					/>
				</div>
			</div>

			<div className={styles.articleImage}>
				<img src={processedArticle.img} alt={processedArticle.title} />
			</div>

			<div className={styles.articleContent}>
				<div
					dangerouslySetInnerHTML={{ __html: processedArticle.text }}
				/>
			</div>

			{processedArticle.quoteText && (
				<div className={styles.quote}>
					<blockquote>
						"{processedArticle.quoteText}"
						<cite>— {processedArticle.quoteAuthor}</cite>
					</blockquote>
				</div>
			)}

			<div className={styles.navigation}>
				<LinkTo
					title="Back to articles"
					link="/articles"
					direction="left"
				/>
			</div>
		</div>
	);
};

export default ArticlePage;
