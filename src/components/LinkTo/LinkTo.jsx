import { Link } from "react-router-dom";
import styles from './linkTo.module.css';
import arrowRight from '../../img/link-arrow--right.svg';
import arrowLeft from '../../img/link-arrow--left.svg';

const LinkTo = ({ title, link, direction = "right" }) => {
	const isLeft = direction === "left";
	const arrow = isLeft ? arrowLeft : arrowRight;

	return (
		<Link to={link} className={styles.link}>
			{isLeft && <img src={arrow} alt="Link arrow" className={styles.icon} />}
			<span className={styles.text}>{title}</span>
			{!isLeft && <img src={arrow} alt="Link arrow" className={styles.icon} />}
		</Link>
	);
};

export default LinkTo;
