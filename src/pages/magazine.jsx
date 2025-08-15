import styles from "./magazine.module.css";
import Header from "../components/Header/Header";
import CategoriesNavbar from "../components/CategoriesNavbar/CategoriesNavbar";
import ArticleCards from "../components/ArticleCards/ArticleCards";
import LinkTo from "../components/LinkTo/LinkTo";

const Magazine = () => {
	return (
		<div className={styles.magazine + " container"}>
			<div className={styles["magazine-header"]}>
				<Header title="magazine" />
			</div>

			<div className={styles["magazine-navbar"]}>
				<CategoriesNavbar />
			</div>

			<div className={styles["magazine-articles"]}>
				<ArticleCards />
			</div>

			<div className={styles["magazine-link-next"]}>
				<LinkTo title="next" link="/articles" direction="right" />
			</div>
		</div>
	);
};

export default Magazine;
