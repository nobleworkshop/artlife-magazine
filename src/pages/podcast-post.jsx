import PodcastPost from '@components/PodcastPost/PodcastPost';
import styles from './podcast-post.module.css';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Podcast from '@components/Podcast/Podcast';
import ReturnNavigation from '@components/ReturnNavigation/ReturnNavigation';
import { podcastData } from "../data/podcastData";

const PodcastPostPage = () => {
	return (
		<>
			<div className={styles.main + ' container'}>
				<div className={styles['author-profile']}>
					<div className={styles['author-profile__container']}>
						<Header />
						<ReturnNavigation title="Podcast" link="/podcast" />
						<PodcastPost podcastData={podcastData} />

						<Podcast />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PodcastPostPage;
