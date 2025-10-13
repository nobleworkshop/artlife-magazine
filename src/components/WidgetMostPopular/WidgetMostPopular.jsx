import { useApi } from '../../hooks/useApi';
import MostPopular from '../MostPopular/MostPopular';
import Widget from '../Widget/Widget';

const WidgetMostPopular = () => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading)
		return (
			<Widget title="Most Popular">
				<div>Loading...</div>
			</Widget>
		);
	if (error)
		return (
			<Widget title="Most Popular">
				<div>Error: {error}</div>
			</Widget>
		);
	if (!articles)
		return (
			<Widget title="Most Popular">
				<div>No articles found</div>
			</Widget>
		);

	// Get the most popular articles (first 3)
	const mostPopularArticles = articles.slice(0, 3);

	return (
		<Widget title="Most Popular">
			{mostPopularArticles.map((article, index) => (
				<MostPopular
					key={article.id}
					num={`${String(index + 1).padStart(2, '0')}`}
					title={article.title}
					autor={article.authorName}
				/>
			))}
		</Widget>
	);
};

export default WidgetMostPopular;
