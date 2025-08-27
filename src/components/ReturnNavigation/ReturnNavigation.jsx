import { Link } from "react-router-dom";
import LinkTo from "../LinkTo/LinkTo";
import styles from "./ReturnNavigation.module.css";

const ReturnNavigation = ({ title, link }) => {
	return (
		<section className={styles.returnNav}>
			<LinkTo title="go back" link={link} direction="left" />
			<Link to={link} className={styles.returnNav__title}>
				<h2 className={styles.returnNav__title}>{title}</h2>
			</Link>
		</section>
	);
};

export default ReturnNavigation;
