import MostPopular from '../components/MostPopular/MostPopular';

import styles from './uikit.module.css';

const UiKitMostPopular = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>MostPopular</h3>

			<div
				className={`${styles.component__preview} ${
					styles['component__preview--column']
				}`}
			>
				<MostPopular
					num="01"
					title="Street art festival"
					autor="Cristofer Vaccaro"
				/>

				<MostPopular
					num="02"
					title="Hope dies last"
					autor="Anne Henry"
				/>

				<MostPopular
					num="03"
					title="Artists who want to rise above"
					autor="Anna Nielsen"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{
							'import MostPopular from "../components/MostPopular/MostPopular";'
						}
						<br />
						<br />
						{`<MostPopular num="01"
             title="Street art festival"
             autor="Cristofer Vaccaro" />`}
						<br />
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitMostPopular;
