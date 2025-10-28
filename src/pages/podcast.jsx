import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import PodcastListItem from '@components/PodcastListItem/PodcastListItem';

import { useApi } from '../hooks/useApi';

import styles from './podcast.module.css';

const Podcast = () => {
	const { data: podcasts, loading, error } = useApi('podcasts');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!podcasts) return <div>No podcasts found</div>;

	// Map cover names to actual image paths
	const getCoverImage = (coverName) => {
		const coverMap = {
			cover1: '/img/podcast-covers/small/01.jpg',
			cover2: '/img/podcast-covers/small/02.jpg',
			cover3: '/img/podcast-covers/small/03.jpg',
			cover4: '/img/podcast-covers/small/04.jpg',
			cover5: '/img/podcast-covers/small/05.jpg',
		};
		return coverMap[coverName] || '/img/podcast-covers/small/01.jpg';
	};

	return (
		<>
			<div className={`${styles.main} container`}>
				<div className={styles['podcast__header']}>
					<Header title="podcast" />
				</div>
				<div className={styles['podcast__list']}>
					{podcasts.reverse().map((podcast) => (
						<PodcastListItem
							key={podcast.id}
							number={podcast.number}
							image={getCoverImage(podcast.cover)}
							title={podcast.title}
							date={podcast.date}
							duration={podcast.duration}
						/>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Podcast;
