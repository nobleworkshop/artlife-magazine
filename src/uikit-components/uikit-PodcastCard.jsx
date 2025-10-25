import PodcastCard from '../components/PodcastCard/PodcastCard';

import styles from './uikit.module.css';
import PodcastCardCover from '@img/podcast-covers/cover5.png';

const UiKitPodcastCard = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>PodcastCard</h3>

			<div className={styles.component__preview}>
				<PodcastCard
					cover={PodcastCardCover}
					author="Fyrre"
					number="05"
					title="The Problem of today’s cultural development"
					date="2022-03-16"
					duration="80"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import PodcastCard from "../components/PodcastCard/PodcastCard"'
						}
						;<br />
						{
							'import PodcastCardCover from "@img/podcast-covers/cover5.png"'
						}
						;
						<br />
						<br />
						{
							'<PodcastCard cover={PodcastCardCover} author="Fyrre" number="05" title="The Problem of today’s cultural development" date="2022-03-16" duration="80"/>'
						}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitPodcastCard;
