import { useApi } from '../../hooks/useApi';
import { processPodcastData } from '../../utils/imageUtils';
import DetailsItem from '../DetailsItem/DetailsItem';
import LinkTo from '../LinkTo/LinkTo';
import PodcastCover from '../PodcastPost/PodcastPostComponents/PodcastCover';
import ReturnNavigation from '../ReturnNavigation/ReturnNavigation';

import styles from './podcastPage.module.css';

const PodcastPage = ({ podcastId }) => {
	const { data: podcasts, loading, error } = useApi('podcasts');

	if (loading) return <div>Loading podcast...</div>;
	if (error) return <div>Error loading podcast: {error}</div>;
	if (!podcasts || podcasts.length === 0) return <div>No podcasts found</div>;

	// Находим подкаст по ID
	const podcast = podcasts.find((p) => p.id === parseInt(podcastId));
	if (!podcast) return <div>Podcast not found</div>;

	// Обрабатываем данные подкаста для получения правильных путей к изображениям
	const processedPodcast = processPodcastData(podcast);

	return (
		<div className={styles.podcastPage}>
			<ReturnNavigation />

			<div className={styles.podcastHeader}>
				<h1 className={styles.title}>{processedPodcast.title}</h1>

				<div className={styles.meta}>
					<DetailsItem
						title="Author"
						value={processedPodcast.author}
					/>
					<DetailsItem
						title="Episode"
						value={`#${processedPodcast.number}`}
					/>
					<DetailsItem title="Date" value={processedPodcast.date} />
					<DetailsItem
						title="Duration"
						value={`${processedPodcast.duration} min`}
					/>
				</div>
			</div>

			<div className={styles.podcastCover}>
				<PodcastCover
					coverImage={processedPodcast.coverImage}
					author={processedPodcast.author}
					episodeNumber={processedPodcast.number}
				/>
			</div>

			<div className={styles.podcastContent}>
				<div className={styles.description}>
					<h2>About this episode</h2>
					<p>
						Join {processedPodcast.author} in episode #
						{processedPodcast.number}
						as we explore {processedPodcast.title.toLowerCase()}.
						This {processedPodcast.duration}-minute episode covers
						important topics and provides valuable insights.
					</p>
				</div>

				<div className={styles.listenSection}>
					<h3>Listen now</h3>
					<div className={styles.listenButtons}>
						<button className={styles.listenButton}>
							Play Episode
						</button>
						<button className={styles.listenButton}>
							Download
						</button>
					</div>
				</div>
			</div>

			<div className={styles.navigation}>
				<LinkTo
					title="Back to podcasts"
					link="/podcasts"
					direction="left"
				/>
			</div>
		</div>
	);
};

export default PodcastPage;
