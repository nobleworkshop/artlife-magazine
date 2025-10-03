import AuthorsList from '../components/AuthorsList/AuthorsList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useApi } from '../hooks/useApi';

import styles from './authors.module.css';

const Authors = () => {
	const { data: authors, loading, error } = useApi('authors');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!authors) return <div>No authors found</div>;

	return (
		<>
			<div className={`${styles.authors} container`}>
				<div className={styles['authors-header']}>
					<Header title="authors" />
				</div>

				<div className={styles['authors-authors-list']}>
					<AuthorsList authors={authors} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Authors;
