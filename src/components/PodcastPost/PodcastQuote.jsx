import styles from "./podcastQuote.module.css";

const PodcastQuote = () => {
	return (
		<div className={styles.quote}>
			<div className={styles.divider}></div>

			<div className={styles.quoteContent}>
				<span className={styles.quoteMark}>"</span>
				<div className={styles.quoteText}>
					<p className={styles.text}>
						The greatest glory in living lies not in never falling,
						but in rising every time we fall.
					</p>
					<span className={styles.author}>Nelson Mandela</span>
				</div>
			</div>

			<div className={styles.divider}></div>
		</div>
	);
};

export default PodcastQuote;
