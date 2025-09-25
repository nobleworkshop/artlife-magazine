import styles from './runningLine.module.css';

const RunningLine = () => {
	return (
		<>
			<div className={styles.runningLine}>
				<div className={styles.title}>News Ticker+++</div>

				<div className={styles.ticker}>
					<div className={styles.ticker__in}>
						<span className={styles.ticker__item}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit +++
						</span>
						<span className={styles.ticker__item}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit +++
						</span>
						<span className={styles.ticker__item}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit +++
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default RunningLine;
