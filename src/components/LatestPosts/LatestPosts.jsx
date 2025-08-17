import ArticleCard  from '../ArticleCard/ArticleCard';
import { articles } from "../../data/articles";
import styles from './latestPosts.module.css';
import LinkTo from "../LinkTo/LinkTo";
import SectionTitle from "../SectionTitle/SectionTitle";

const LatestPosts = () => {
	return (
		<section className={styles.latestPosts}>
			<div className={styles.latestPosts__header}>
				<SectionTitle title="Latest Posts" />
				<LinkTo title="see all" link="/articles" direction="right" />
			</div>

			<div className={styles.articles__grid}>
				{articles.slice(-3).reverse().map((article) => (
					<ArticleCard
						key={article.id}
						img={article.img}
						title={article.title}
						text={article.text}
						author={article.author}
						date={article.date}
						timeToRead={article.timeToRead}
						badgeName={article.badgeName}
						badgeLink={article.badgeLink}
					/>
				))}
			</div>
		</section>
	 );
}

export default LatestPosts;
