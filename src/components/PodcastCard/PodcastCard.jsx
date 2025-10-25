import DetailsItem from '../DetailsItem/DetailsItem';

import styles from './podcastCard.module.css';
import arrowIcon from '@img/arrow.svg';

const PodcastCard = ({ cover, author, number, title, date, duration }) => {
	return (
		<div className={styles.card}>
			<div className={styles.coverWrapper}>
				<img src={cover} alt={title} className={styles.cover} />
				<div className={styles.cover__overlayTopLeft}>
					<span className={styles.heading}>{author}</span>
					<br />
					<span className={styles.subHeading}>Podcast</span>
				</div>
				<div className={styles.cover__footer}>
					<div className={styles.number}>Ep {number}</div>
					<img src={arrowIcon} alt="arrow" className={styles.arrow} />
				</div>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.podcast__details}>
				<DetailsItem title="DateShort" value={date} />
				<DetailsItem title="Duration" value={duration} />
			</div>
		</div>
	);
};

export default PodcastCard;
