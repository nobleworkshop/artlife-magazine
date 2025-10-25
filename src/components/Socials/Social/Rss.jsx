import { Link } from 'react-router-dom';

import styles from './social.module.css';
import rss from '@img/social/rss.svg';

const Rss = ({ link, alt, target, invert = false }) => {
	return (
		<Link to={link} target={target} className={styles.socialLink}>
			<img
				src={rss}
				alt={alt}
				className={`${styles.socialIcon} ${invert ? styles.invert : ''}`}
			/>
		</Link>
	);
};

export default Rss;
