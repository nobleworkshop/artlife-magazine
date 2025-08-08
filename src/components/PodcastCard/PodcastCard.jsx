import styles from './podcastCard.module.css';
import arrowIcon from '../../img/arrow.svg';
import DetailsItem from '../DetailsItem/DetailsItem';

const PodcastCard = ({ cover, title, number }) => {
	return (
		<div className={styles.card}>
			<div className={styles.coverWrapper}>
				<img src={cover} alt={title} className={styles.cover} />
				<div className={styles.cover__overlayTopLeft}>
					<span className={styles.heading}>Fyrre</span>
					<br />
					<span className={styles.subHeading}>Podcast</span>
				</div>
				<div className={styles.cover__footer}>
					<div className={styles.number}>{number}</div>
					<img src={arrowIcon} alt="arrow" className={styles.arrow} />
				</div>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.podcast__details}>
				<DetailsItem title="Date" value="2022-03-16"/>
				<DetailsItem title="Duration" value="1"/>
			</div>

		</div>
	);
};

export default PodcastCard;
