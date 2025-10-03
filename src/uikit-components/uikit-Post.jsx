import Post from '../components/Post/Post';
import { useApi } from '../hooks/useApi';

import styles from './uikit.module.css';

const UikitPost = () => {
	const { data: articles, loading, error } = useApi('articles');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!articles || articles.length === 0) return <div>No articles found</div>;

	const article = articles[0];

	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Post</h3>

			<div className={styles.component__preview}>
				<Post data={article} />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{'import Post from "../components/Post/Post";'}
						<br />
						<br />
						{'<Post data={article} />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UikitPost;
