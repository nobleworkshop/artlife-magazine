import arrowIcon from "../../img/arrow.svg";
import styles from "./podcastCover.module.css";

const PodcastCover = () => {
	return (
		<div className={styles.coverWrapper}>
			<img
				src="/src/img/podcast-covers/cover5.png"
				alt="Podcast cover"
				className={styles.cover}
			/>

			<div className={styles.overlayTopLeft}>
				<span className={styles.author}>Fyrre</span>
				<br />
				<span className={styles.type}>Podcast</span>
			</div>

			<div className={styles.overlayBottomRight}>
				<div className={styles.episodeNumber}>Ep 05</div>
				<img src={arrowIcon} alt="arrow" className={styles.arrow} />
			</div>
		</div>
	);
};

export default PodcastCover;
