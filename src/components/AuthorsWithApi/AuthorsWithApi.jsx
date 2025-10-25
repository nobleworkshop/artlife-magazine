import { useAuthors } from '../../hooks/useApiWithImages';
import AuthorCard from '../AuthorCard/AuthorCard';
import LinkTo from '../LinkTo/LinkTo';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './authors.module.css';

const AuthorsWithApi = () => {
	const { data: authors, loading, error } = useAuthors();

	if (loading) return <div>Loading authors...</div>;
	if (error) return <div>Error loading authors: {error}</div>;
	if (!authors || authors.length === 0) return <div>No authors found</div>;

	return (
		<section className={styles.authors}>
			<div className={styles.header}>
				<SectionTitle title="Authors" />
				<LinkTo title="all authors" link="/authors" direction="right" />
			</div>

			<div className={styles.grid}>
				{authors.map((author) => (
					<AuthorCard
						key={author.id}
						img={author.img}
						name={author.name}
						job={author.job}
						city={author.city}
					/>
				))}
			</div>
		</section>
	);
};

export default AuthorsWithApi;
