import styles from "./uikit.module.css";
import Authors from "../components/Authors/Authors";

const UiKitAuthors = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Authors section</h3>

			<div className={styles.component__preview + " " + styles['component__preview--column'] + " " + styles['component__preview--dark-bg']}>
				<Authors />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Authors from "../components/Authors/Authors";`}
						<br />
						<br />
						{`<Authors />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthors;
