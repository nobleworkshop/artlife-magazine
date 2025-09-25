import RunningLine from '../components/RunningLine/RunningLine';

import styles from './uikit.module.css';

const UiKitRunningLine = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>RunningLine</h3>

			<div className={styles.component__preview}>
				<RunningLine />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import RunningLine from "../components/RunningLine/RunningLine";'
						}
						<br />
						<br />
						{'<RunningLine />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitRunningLine;
