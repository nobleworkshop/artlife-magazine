import PodcastCard from "../components/PodcastCard/PodcastCard";
import styles from "./uikit.module.css";
import sampleCover from "../img/podcast-covers/cover5.png";

const UiKitPodcastCard = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>PodcastCard</h3>

			<div className={styles.component__preview}>
				<PodcastCard
					cover={sampleCover}
					title="The Problem of today’s cultural development"
					number="Ep 05"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
							{`import PodcastCard from "../components/PodcastCard/PodcastCard"`};
							<br />
							<br />
							{`<PodcastCard cover={sampleCover} title="The Problem of today’s cultural development" number="Ep 05"/>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitPodcastCard;
