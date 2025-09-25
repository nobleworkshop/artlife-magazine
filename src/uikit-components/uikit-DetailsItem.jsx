import DetailsItem from '../components/DetailsItem/DetailsItem';

import styles from './uikit.module.css';

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Details Item</h3>

			<div className={styles.component__preview}>
				<DetailsItem title="Text" value="Jacob Gronberg" />
				<DetailsItem title="Date" value="2022-03-16" />
				<DetailsItem title="Duration" value="1" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import DetailsItem from "../components/DetailsItem/DetailsItem";'
						}
						<br />
						<br />
						{'<DetailsItem title="Text" value="Jacob Gronberg"/>'}
						<br />
						{'<DetailsItem title="Date" value="2022-03-16"/>'}
						<br />
						{'<DetailsItem title="Duration" value="1"/>'}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
