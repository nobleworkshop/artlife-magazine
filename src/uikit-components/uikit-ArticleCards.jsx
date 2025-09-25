import ArticleCards from '../components/ArticleCards/ArticleCards';

import styles from './uikit.module.css';

const UiKitArticleCards = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Article Cards section</h3>

			<div
				className={`${styles.component__preview} ${
					styles['component__preview--column']
				} ${styles['component__preview--dark-bg']}`}
			>
				<ArticleCards />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import ArticleCards from "../components/ArticleCards/ArticleCards";'
						}
						<br />
						<br />
						{'<ArticleCards />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitArticleCards;
