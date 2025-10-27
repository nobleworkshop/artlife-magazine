import AuthorArticles from '@components/AuthorArticles/AuthorArticles';
import AuthorProfile from '@components/AuthorProfile/AuthorProfile';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import LinkTo from '@components/LinkTo/LinkTo';

import { useApi } from '../hooks/useApi';

import styles from './author-profile.module.css';

const AuthorProfilePage = () => {
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

	// Get the first author as example
	const authorData = {
		authorName: authors[0].name,
		shortBio:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
		longBio:
			'Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.',
		profileImageSrc: authors[0].img,
		socialLinks: {
			instagram: 'https://instagram.com/louisejensen',
			twitter: 'https://twitter.com/louisejensen',
			youtube: 'https://youtube.com/louisejensen',
		},
	};

	// Filter articles by author name and take first 4
	const authorArticles = articles
		.filter((article) => article.authorName === authorData.authorName)
		.slice(0, 4)
		.map((article) => ({
			id: article.id,
			title: article.title,
			image: article.img,
			date: article.date,
			readTime: article.timeToRead,
		}));

	return (
		<>
			<div className={`${styles.main} container`}>
				<div className={styles['author-profile']}>
					<div className={styles['author-profile__container']}>
						<Header />
						<div className={styles['author-profile__navigation']}>
							<LinkTo title="Go Back" link="/" direction="left" />
							<h2 className={styles['author-profile__title']}>
								Author
							</h2>
						</div>

						<AuthorProfile {...authorData} />
						<AuthorArticles
							authorName={authorData.authorName}
							articles={authorArticles}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AuthorProfilePage;
