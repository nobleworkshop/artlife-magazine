import PodcastCover from './PodcastCover';
import PodcastListenOn from './PodcastListenOn';
import PodcastMeta from './PodcastMeta';

import styles from './podcastPostSidebar.module.css';

const PodcastPostSidebar = ({ podcastData }) => {
	const { coverImage, author, episodeNumber, date, duration } = podcastData;

	return (
		<div className={styles.sidebar}>
			<PodcastCover
				coverImage={coverImage}
				author={author}
				episodeNumber={episodeNumber}
			/>
			<PodcastListenOn />
			<PodcastMeta date={date} duration={duration} />
		</div>
	);
};

export default PodcastPostSidebar;
