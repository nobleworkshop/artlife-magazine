import Copyright from '../components/Copyright/Copyright';

import styles from './uikit.module.css';

const UiKitCopyright = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Copyright</h3>

			<div className={styles.component__preview}>
				<Copyright />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import Copyright from "../components/Copyright/Copyright";'
						}
						<br />
						<br />
						{'<Copyright />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitCopyright;
