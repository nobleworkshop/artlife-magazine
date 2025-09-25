import DetailsItem from '../DetailsItem/DetailsItem';

import styles from './authorCard.module.css';
import defaultImg from '../../img/authors/1.png';

const AuthorCard = ({ img = defaultImg, name, job, city }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt="Author photo" className={styles.photo} />

			<div className={styles.info}>
				<h3 className={styles.name}>{name}</h3>
				<div className={styles['info__details']}>
					<DetailsItem title="Job" value={job} />
					<DetailsItem title="City" value={city} />
				</div>
			</div>
		</div>
	);
};

export default AuthorCard;
