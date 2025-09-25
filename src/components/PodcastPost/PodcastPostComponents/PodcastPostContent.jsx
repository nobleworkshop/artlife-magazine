import PodcastQuote from './PodcastQuote';

import styles from './podcastPostContent.module.css';

const PodcastPostContent = ({ podcastData }) => {
	const { episodeNumber, title, description, content, quote, quoteAuthor } =
		podcastData;

	return (
		<div className={styles.content}>
			<div className={styles.header}>
				<div className={styles.episodeInfo}>
					<span className={styles.episodeNumber}>
						{episodeNumber}
					</span>
					<h1 className={styles.title}>{title}</h1>
				</div>
				<p className={styles.description}>{description}</p>
			</div>

			<div className={styles.textContent}>
				{content.map((paragraph, index) => (
					<p key={index} className={styles.paragraph}>
						{paragraph}
					</p>
				))}

				<PodcastQuote quote={quote} quoteAuthor={quoteAuthor} />
			</div>
		</div>
	);
};

export default PodcastPostContent;
