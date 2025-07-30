import { Link } from "react-router-dom";
import styles from "./badge.module.css";

const Badge = ({ title, link}) => {
	return (
		<>
			{link && (
				<Link to={link} className={styles.badge}>
					{title}
				</Link>
			)}
			{!link && (
				<div className={styles.badge}>{title}</div>
			)}
		</>
	);
};

export default Badge;
