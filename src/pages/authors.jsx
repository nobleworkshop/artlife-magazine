import styles from "./authors.module.css";
import Header from "../components/Header/Header";
import AuthorsList from "../components/AuthorsList/AuthorsList";
import Footer from "@components/Footer/Footer";
import data from "../../public/db.json";

const Authors = () => {
	return (
		<>
			<div className={styles.authors + " container"}>
				<div className={styles["authors-header"]}>
					<Header title="authors" />
				</div>

				<div className={styles["authors-authors-list"]}>
					<AuthorsList authors={data.authors} />
				</div>

			</div>
			<Footer />
		</>
	);
};

export default Authors;
