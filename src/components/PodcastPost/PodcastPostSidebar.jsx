import PodcastCover from "./PodcastCover";
import PodcastMeta from "./PodcastMeta";
import PodcastListenOn from "./PodcastListenOn";
import styles from "./podcastPostSidebar.module.css";

const PodcastPostSidebar = () => {
	return (
		<div className={styles.sidebar}>
			<PodcastCover />
			<PodcastListenOn />
			<PodcastMeta />
		</div>
	);
};

export default PodcastPostSidebar;
