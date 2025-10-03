import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import Post from '../components/Post/Post';
import ReturnNavigation from '../components/ReturnNavigation/ReturnNavigation';
import { useApi } from '../hooks/useApi';

import styles from './magazinePost.module.css';

const MagazinePost = () => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!articles || articles.length === 0) return <div>No articles found</div>;

	return (
		<>
			<div className={`${styles.magazinePost} container`}>
				<div className={styles['magazinePost-header']}>
					<Header />
				</div>

				<div className={styles['magazinePost-returnNav']}>
					<ReturnNavigation title="magazin" link="/" />
				</div>

				<div className={styles['magazinePost-post']}>
					<Post data={articles[0]} />
				</div>

				<div className={styles['magazinePost-latestPosts']}>
					<LatestPosts />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MagazinePost;
