import PodcastPostSidebar from "@component/PodcastPostComponents/PodcastPostSidebar";
import PodcastPostContent from "@component/PodcastPostComponents/PodcastPostContent";
import styles from "./podcastPost.module.css";

const PodcastPost = ({ podcastData }) => {
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
