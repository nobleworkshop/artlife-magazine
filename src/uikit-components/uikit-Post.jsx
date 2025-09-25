import Post from '../components/Post/Post';
import { articles } from '../data/articles';

import styles from './uikit.module.css';

const UikitPost = () => {
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
