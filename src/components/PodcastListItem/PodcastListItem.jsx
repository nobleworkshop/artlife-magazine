import DetailsItem from '@components/DetailsItem/DetailsItem';
import LinkTo from '@components/LinkTo/LinkTo';

import styles from './style.module.css';

const PodcastListItem = ({ number, image, title, date, duration, link }) => {
	return (
		<div className={styles['podcastListItem']}>
			<div className={styles['podcastListItem__number']}>{number}</div>

			<div className={styles['podcastListItem__image']}>
				<img src={image} alt={title} />
			</div>

			<div className={styles['podcastListItem__title']}>{title}</div>

			<div className={styles['podcastListItem__info']}>
				<DetailsItem title="Date" value={date} />
				<DetailsItem title="Duration" value={duration} />
				<LinkTo title="Listen" href={link} />
			</div>
		</div>
	);
};

export default PodcastListItem;
