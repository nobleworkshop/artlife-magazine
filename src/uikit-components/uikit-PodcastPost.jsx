import PodcastPost from '../components/PodcastPost/PodcastPost';
import { podcastData } from '../data/podcastData';

import styles from './uikit.module.css';

const UiKitPodcastPost = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Podcast Post</h3>

			<div
				className={`${styles.component__preview} ${
					styles['component__preview--column']
				} ${styles['component__preview--dark-bg']}`}
			>
				<PodcastPost podcastData={podcastData} />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import PodcastPost from "../components/PodcastPost/PodcastPost";'
						}
						<br />
						<br />
						{'<PodcastPost podcastData={podcastData} />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitPodcastPost;
