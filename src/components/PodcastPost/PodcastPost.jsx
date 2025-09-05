import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import PodcastPostSidebar from "./PodcastPostSidebar";
import PodcastPostContent from "./PodcastPostContent";
import styles from "./podcastPost.module.css";
import LatestPosts from "@components/LatestPosts/LatestPosts";
import LinkTo from "@components/LinkTo/LinkTo";

const PodcastPost = () => {
	return (
		<>
			<div className={styles.podcastPost__content}>
				<div className={styles.podcastPost__sidebar}>
					<PodcastPostSidebar />
				</div>
				<div className={styles.podcastPost__mainContent}>
					<PodcastPostContent />
				</div>
			</div>
		</>
	);
};

export default PodcastPost;
