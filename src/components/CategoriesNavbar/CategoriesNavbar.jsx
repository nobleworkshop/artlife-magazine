import Badge from "../Badge/Badge";
import styles from "./categoriesNavbar.module.css";

const CategoriesNavbar = () => {
  return (
	<section className={styles["categories-navbar"]}>
		<h2 className={styles["categories-navbar__title"]}>Categories</h2>
		<nav className={styles.navbar}>
		<Badge title="all" link="/categories/all" />
		<Badge title="art" link="/categories/art" />
		<Badge title="Street Art" link="/categories/streetArt" />
		<Badge title="Sculptures" link="/categories/sculptures" />
		</nav>
	</section>
  );
};

export default CategoriesNavbar;
