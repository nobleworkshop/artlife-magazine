import AuthorCard from '../components/AuthorCard/AuthorCard';

import styles from './uikit.module.css';
import img1 from '../img/authors/1.png';

const UiKitAuthorCard = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Author Card</h3>

			<div className={styles.component__preview}>
				<AuthorCard
					img={img1}
					name="Jakob Grønberg"
					job="Artist"
					city="Berlin"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import AuthorCard from "../components/AuthorCard/AuthorCard";'
						}
						<br />
						{'import img1 from "../img/authors/1.png";'}
						<br />
						<br />
						{'<AuthorCard'}
						<br />
						{'  img={img1}'}
						<br />
						{'  name="Jakob Grønberg"'}
						<br />
						{'  job="Artist"'}
						<br />
						{'  city="Berlin"'}
						<br />
						{'/>'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthorCard;
