import styles from "./uikit.module.css";
import LatestPosts from "../components/LatestPosts/LatestPosts";

const UiKitLatestPosts = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Latest Posts section</h3>

			<div className={styles.component__preview + " " + styles['component__preview--column'] + " " + styles['component__preview--dark-bg']}>
				<LatestPosts />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{`import LatestPosts from "../components/LatestPosts/LatestPosts";`}
						<br />
						<br />
						{`<LatestPosts />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitLatestPosts;
