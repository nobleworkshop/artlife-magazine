// AuthorsList.jsx
import styles from "./authorsList.module.css";
import AuthorsListItem from "../AuthorListItem/AuthorsListItem";

import img1 from '../../img/authors/1.png';
import img2 from '../../img/authors/2.png';
import img3 from '../../img/authors/3.png';
import img4 from '../../img/authors/4.png';
import img5 from '../../img/authors/5.png';
import img6 from '../../img/authors/6.png';

const AuthorsList = () => {
	const authors = [
		{ id: 1, name: 'Jakob Grønberg', job: 'Artist', city: 'Berlin', img: img1 },
		{ id: 2, name: 'Louise Jensen', job: 'Artist', city: 'Stockholm', img: img2 },
		{ id: 3, name: 'Anne Henry', job: 'Photograph', city: 'New York', img: img3 },
		{ id: 4, name: 'Anna Nielsen', job: 'Columnists', city: 'Copenhagen', img: img4 },
		{ id: 5, name: 'Jane Cooper', job: 'Artist', city: 'Berlin', img: img5 },
		{ id: 6, name: 'Cristofer Vaccaro', job: 'Artist', city: 'Lisbon', img: img6 },
	];

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
