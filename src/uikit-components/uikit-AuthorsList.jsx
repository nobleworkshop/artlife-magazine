import AuthorsList from "../components/AuthorsList/AuthorsList";
import styles from "./uikit.module.css";

const UiKitAuthorsList = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Authors List</h3>

			{/* Превью с реальным списком авторов */}
			<div className={styles.component__preview}>
				<AuthorsList />
			</div>

			{/* Код для копирования */}
			<div className={styles.component__code}>
				<pre>
					<code>
						{`import AuthorsList from "../components/AuthorsList/AuthorsList";`}
						<br />
						<br />
						{`<AuthorsList />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthorsList;
