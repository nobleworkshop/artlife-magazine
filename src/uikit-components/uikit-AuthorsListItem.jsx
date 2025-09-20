import AuthorsListItem from "../components/AuthorsListItem/AuthorsListItem";
import styles from "./uikit.module.css";

const UiKitAuthorsListItem = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Authors List Item</h3>

			<div className={styles.component__preview}>
				<AuthorsListItem
					img="/img/authors/1.png"
					name="Jakob Grønberg"
					job="Artist"
					city="Berlin"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
{`import AuthorsListItem from "../components/AuthorsListItem/AuthorsListItem";

<AuthorsListItem
  img="/img/authors/1.png"
  name="Jakob Grønberg"
  job="Artist"
  city="Berlin"
/>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthorsListItem;
