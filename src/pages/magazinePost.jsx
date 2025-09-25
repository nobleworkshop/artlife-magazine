// import { useParams } from "react-router-dom";
import Footer from '@components/Footer/Footer';

import Header from '../components/Header/Header';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import Post from '../components/Post/Post';
import ReturnNavigation from '../components/ReturnNavigation/ReturnNavigation';
import { articles } from '../data/articles.js';

import styles from './magazinePost.module.css';

const MagazinePost = () => {
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
