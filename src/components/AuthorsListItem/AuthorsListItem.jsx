import DetailsItem from '../DetailsItem/DetailsItem';
import LinkTo from '../LinkTo/LinkTo';

import styles from './authorsListItem.module.css';

const AuthorsListItem = ({ img = '/img/authors/1.png', name, job, city }) => {
	return (
		<div className={styles.author}>
			<div className={styles.author__info}>
				<img src={img} alt={name} className={styles.author__img} />
				<p className={styles.author__name}>{name}</p>
			</div>
			<div className={styles.author__detailsContainer}>
				<div className={styles.author__details}>
					<DetailsItem title="Job" value={job} />
					<DetailsItem title="City" value={city} />
				</div>
				<LinkTo title="About" />
			</div>
		</div>
	);
};

export default AuthorsListItem;
