import styles from "./uikit.module.css";
import Podcast from "../components/Podcast/Podcast";

const UiKitPodcast = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Podcast section</h3>

			<div className={styles.component__preview + " " + styles['component__preview--column'] + " " + styles['component__preview--dark-bg']}>
				<Podcast />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Podcast from "../components/Podcast/Podcast";`}
						<br />
						<br />
						{`<Podcast />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitPodcast;
