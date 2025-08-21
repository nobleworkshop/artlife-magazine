import styles from "./styles.module.css";

const FooterRunningLine = () => {
	return (
		<>
			<div className={styles.runningLine}>
				<div className={styles.ticker}>
					<div className={styles.ticker__in}>
						{Array.from({ length: 20 }).map((_, index) => (
							<span className={styles.ticker__item} key={index}>
								Newsletter+++
							</span>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterRunningLine;