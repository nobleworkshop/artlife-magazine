import Socials from '../components/Socials/Socials';

import styles from './uikit.module.css';

const UiKitSocials = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Социальные иконки</h3>

			<div className={styles.component__preview}>
				<Socials />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{'import Socials from "../components/Socials/Socials";'}
						<br />
						<br />
						{'<Socials />'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitSocials;
