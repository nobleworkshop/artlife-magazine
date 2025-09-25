import Header from '../components/Header/Header';

import styles from './uikit.module.css';

const UikitHeader = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Header</h3>

			<div className={styles.component__preview}>
				<Header title="art&life" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{'import Header from "../components/Header/Header";'}
						<br />
						<br />
						{
							'<Header title="art&life | authors | magazine | podcast" />'
						}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UikitHeader;
