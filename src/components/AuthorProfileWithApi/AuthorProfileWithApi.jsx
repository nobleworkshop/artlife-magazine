import { useApi } from '../../hooks/useApi';
import { processAuthorData } from '../../utils/imageUtils';
import Article from '../Article/Article';
import DetailsItem from '../DetailsItem/DetailsItem';
import LinkTo from '../LinkTo/LinkTo';
import ReturnNavigation from '../ReturnNavigation/ReturnNavigation';
import Socials from '../Socials/Socials';

import styles from './authorProfile.module.css';

const AuthorProfile = ({ authorId }) => {
	const {
		data: authors,
		loading: authorsLoading,
		error: authorsError,
	} = useApi('authors');
	const {
		data: articles,
		loading: articlesLoading,
		error: articlesError,
	} = useApi('articles');

	if (authorsLoading || articlesLoading) return <div>Loading...</div>;
	if (authorsError || articlesError) return <div>Error loading data</div>;
	if (!authors || !articles) return <div>No data found</div>;

	// Находим автора по ID
	const author = authors.find((a) => a.id === parseInt(authorId));
	if (!author) return <div>Author not found</div>;

	// Обрабатываем данные автора для получения правильных путей к изображениям
	const processedAuthor = processAuthorData(author);

	// Находим статьи этого автора
	const authorArticles = articles
		.filter((article) => article.authorName === processedAuthor.name)
		.slice(0, 3); // Показываем только первые 3 статьи

	return (
		<div className={styles.authorProfile}>
			<ReturnNavigation />

			<div className={styles.authorHeader}>
				<div className={styles.authorImage}>
					<img src={processedAuthor.img} alt={processedAuthor.name} />
				</div>

				<div className={styles.authorInfo}>
					<h1 className={styles.name}>{processedAuthor.name}</h1>
					<h2 className={styles.job}>{processedAuthor.job}</h2>
					<p className={styles.city}>{processedAuthor.city}</p>

					<div className={styles.meta}>
						<DetailsItem
							title="Articles"
							value={authorArticles.length}
						/>
						<DetailsItem
							title="Location"
							value={processedAuthor.city}
						/>
						<DetailsItem
							title="Specialty"
							value={processedAuthor.job}
						/>
					</div>

					<div className={styles.socials}>
						<Socials />
					</div>
				</div>
			</div>

			<div className={styles.authorBio}>
				<h3>About {processedAuthor.name}</h3>
				<p>
					{processedAuthor.name} is a talented{' '}
					{processedAuthor.job.toLowerCase()}
					based in {processedAuthor.city}. With a passion for creative
					expression and artistic innovation, {processedAuthor.name}{' '}
					brings unique perspectives to the art world through their
					work and writings.
				</p>
			</div>

			{authorArticles.length > 0 && (
				<div className={styles.authorArticles}>
					<h3>Recent Articles by {processedAuthor.name}</h3>
					<div className={styles.articlesList}>
						{authorArticles.map((article) => (
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
					<div className={styles.moreArticles}>
						<LinkTo
							title="View all articles by this author"
							link={`/authors/${processedAuthor.id}/articles`}
							direction="right"
						/>
					</div>
				</div>
			)}

			<div className={styles.navigation}>
				<LinkTo
					title="Back to authors"
					link="/authors"
					direction="left"
				/>
			</div>
		</div>
	);
};

export default AuthorProfile;
