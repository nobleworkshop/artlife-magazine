import styles from "./authorsList.module.css";
import AuthorsListItem from "../AuthorsListItem/AuthorsListItem";

const AuthorsList = ({ authors }) => {
	return (
		<div className={styles.authorsList}>
			{authors.map((author, index) => (
				<div key={author.id} className={styles.authorWrapper}>
					<AuthorsListItem
						img={author.img}
						name={author.name}
						job={author.job}
						city={author.city}
					/>
					{index < authors.length - 1 && <div className={styles.divider}></div>}
				</div>
			))}
		</div>
	);
};

export default AuthorsList;
