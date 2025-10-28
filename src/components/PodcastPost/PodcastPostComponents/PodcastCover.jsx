import styles from './podcastCover.module.css';
import arrowIcon from '@img/arrow.svg';

const PodcastCover = ({ coverImage, author, episodeNumber }) => {
	return (
		<div className={styles.coverWrapper}>
			<img
				src={coverImage}
				alt="Podcast cover"
				className={styles.cover}
			/>

			<div className={styles.overlayTopLeft}>
				<span className={styles.author}>{author}</span>
				<br />
				<span className={styles.type}>Podcast</span>
			</div>

			<div className={styles.overlayBottomRight}>
				<div className={styles.episodeNumber}>{episodeNumber}</div>
				<img src={arrowIcon} alt="arrow" className={styles.arrow} />
			</div>
		</div>
	);
};

export default PodcastCover;
