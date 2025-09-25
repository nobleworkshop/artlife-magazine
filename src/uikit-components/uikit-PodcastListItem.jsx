import PodcastListItem from '@components/PodcastListItem/PodcastListItem';

import styles from './uikit.module.css';
import PodcastImg from '@img/podcast-covers/small/01.jpg';

const UiKitPodcastListItem = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>PodcastListItem</h3>

			<div className={styles.component__preview}>
				<PodcastListItem
					number="01"
					image={PodcastImg}
					title="The Problem of today’s cultural development"
					date="2022-03-16"
					duration="80"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import PodcastListItem from "@components/PodcastListItem/PodcastListItem";'
						}
						<br />
						{
							'import PodcastImg from "@img/podcast-covers/small/01.jpg";'
						}
						<br />
						<br />
						{
							'<PodcastListItem number="01" image={PodcastImg} title="The Problem of today’s cultural development" date="2022-03-16" duration="80" />'
						}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitPodcastListItem;
