import PodcastPostSidebar from './PodcastPostComponents/PodcastPostSidebar';
import PodcastPostContent from './PodcastPostComponents/PodcastPostContent';
import styles from './podcastPost.module.css';

const PodcastPost = ({ podcastData }) => {
	if (!podcastData) {
		return <div>No podcast data available</div>;
	}

	return (
		<>
			<div className={styles.podcastPost__content}>
				<div className={styles.podcastPost__sidebar}>
					<PodcastPostSidebar podcastData={podcastData} />
				</div>
				<div className={styles.podcastPost__mainContent}>
					<PodcastPostContent podcastData={podcastData} />
				</div>
			</div>
		</>
	);
};

export default PodcastPost;
