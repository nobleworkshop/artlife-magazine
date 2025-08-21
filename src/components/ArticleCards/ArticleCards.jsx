import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articleCards.module.css";
import { articles } from "../../data/articles";

const ArticleCards = () => {
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
};

export default ArticleCards;
