import { Link } from "react-router-dom";
import LinkTo from "@components/LinkTo/LinkTo";
import styles from "./returnNavigation.module.css";

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
