import AuthorArticles from '../components/AuthorArticles/AuthorArticles';

import styles from './uikit.module.css';

const UiKitArticles = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Article Cards section</h3>

			<div
				className={`${styles.component__preview} ${
					styles['component__preview--column']
				} ${styles['component__preview--dark-bg']}`}
			>
				<AuthorArticles />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import AuthorArticles from "@components/AuthorArticles/AuthorArticles";'
						}
						<br />
						<br />
						{'<AuthorArticles />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitArticles;
