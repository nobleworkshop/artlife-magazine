import LinkTo from "../LinkTo/LinkTo";
import styles from "./ReturnNavigation.module.css";

const ReturnNavigation = ({title, link}) => {
	return (
		<section className={styles.returnNav}>
			<LinkTo title="go back" link={link} direction="left" />
			<h2 className={styles.returnNav__title}>{title}</h2>
		</section>
	 );
}

export default ReturnNavigation;
