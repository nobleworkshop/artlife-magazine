import { useApi } from '../../hooks/useApi';
import ArticleCard from '../ArticleCard/ArticleCard';
import LinkTo from '../LinkTo/LinkTo';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './latestPosts.module.css';

const LatestPosts = () => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!articles) return <div>No articles found</div>;

	return (
		<section className={styles.latestPosts}>
			<div className={styles.latestPosts__header}>
				<SectionTitle title="Latest Posts" />
				<LinkTo title="see all" link="/articles" direction="right" />
			</div>

			<div className={styles.latestPosts__grid}>
				{articles
					.slice(-3)
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

export default LatestPosts;
