import AuthorsListItem from "../components/AuthorListItem/AuthorsListItem";
import styles from "./uikit.module.css";
import img1 from "../img/authors/1.png";

const UiKitAuthorsListItem = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Authors List Item</h3>

			<div className={styles.component__preview}>
				<AuthorsListItem
					img={img1}
					name="Jakob Grønberg"
					job="Artist"
					city="Berlin"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import AuthorsListItem from "../components/AuthorsListItem/";`}
						<br />
						{`import img1 from "../img/authors/1.png";`}
						<br />
						<br />
						{`<AuthorsListItem`}
						<br />
						{`  img={img1}`}
						<br />
						{`  name="Jakob Grønberg"`}
						<br />
						{`  job="Artist"`}
						<br />
						{`  city="Berlin"`}
						<br />
						{`/>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthorsListItem;
