import DetailsItem from "../DetailsItem/DetailsItem";
import Socials from "../Socials/Socials";
import styles from "./podcastMeta.module.css";

const PodcastMeta = () => {
	return (
		<div className={styles.meta}>
			<div className={styles.divider}></div>

			<div className={styles.metaContent}>
				<div className={styles.metaItem}>
					<DetailsItem title="Date" value="16. March 2022" />
				</div>

				<div className={styles.metaItem}>
					<DetailsItem title="Duration" value="45 Min" />
				</div>

				<div className={styles.shareSection}>
					<span className={styles.shareLabel}>Share</span>
					<Socials />
				</div>
			</div>
		</div>
	);
};

export default PodcastMeta;
