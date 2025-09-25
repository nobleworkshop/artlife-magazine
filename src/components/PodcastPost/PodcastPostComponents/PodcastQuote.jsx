import styles from './podcastQuote.module.css';

const PodcastQuote = ({ quote, quoteAuthor }) => {
	return (
		<div className={styles.quote}>
			<div className={styles.divider}></div>

			<div className={styles.quoteContent}>
				<span className={styles.quoteMark}>"</span>
				<div className={styles.quoteText}>
					<p className={styles.text}>{quote}</p>
					<span className={styles.author}>{quoteAuthor}</span>
				</div>
			</div>

			<div className={styles.divider}></div>
		</div>
	);
};

export default PodcastQuote;
