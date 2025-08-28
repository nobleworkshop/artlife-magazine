import React from "react";
import styles from "./authorArticles.module.css";

const AuthorArticles = ({
	authorName = "Louise Jensen",
	articles = [
		{
			id: 1,
			title: "The best art museums",
			image: "/src/img/article-images/1.png",
			date: "16. March 2022",
			readTime: "10 Min",
		},
		{
			id: 2,
			title: "An indestructible hope",
			image: "/src/img/article-images/2.png",
			date: "16. March 2022",
			readTime: "10 Min",
		},
		{
			id: 3,
			title: "The chains of our lives",
			image: "/src/img/article-images/3.png",
			date: "16. March 2022",
			readTime: "10 Min",
		},
		{
			id: 4,
			title: "Keep on smiling",
			image: "/src/img/article-images/4.png",
			date: "16. March 2022",
			readTime: "10 Min",
		},
	],
}) => {
	const renderArticle = (article) => (
		<article key={article.id} className={styles.article}>
			<div className={styles.articleImage}>
				<img
					src={article.image}
					alt={article.title}
					className={styles.image}
				/>
			</div>

			<div className={styles.articleContent}>
				<h3 className={styles.articleTitle}>{article.title}</h3>

				<div className={styles.articleMeta}>
					<div className={styles.metaItem}>
						<span className={styles.metaLabel}>Date</span>
						<span className={styles.metaValue}>{article.date}</span>
					</div>

					<div className={styles.metaItem}>
						<span className={styles.metaLabel}>Read</span>
						<span className={styles.metaValue}>
							{article.readTime}
						</span>
					</div>
				</div>
			</div>
		</article>
	);

	return (
		<section className={styles.authorArticles}>
			<div className={styles.header}>
				<div className={styles.divider}></div>
				<h2 className={styles.title}>Articles by {authorName}</h2>
			</div>

			<div className={styles.articlesGrid}>
				<div className={styles.articlesRow}>
					{articles.slice(0, 2).map(renderArticle)}
				</div>

				<div className={styles.articlesRow}>
					{articles.slice(2, 4).map(renderArticle)}
				</div>
			</div>
		</section>
	);
};

export default AuthorArticles;
