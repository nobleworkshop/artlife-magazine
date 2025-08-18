import Footer from "../components/Footer/Footer";
import styles from "./uikit.module.css";

const UiKitFooter = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Footer</h3>

			<div className={styles.component__preview}>
				<Footer />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Footer from "../components/Footer/Footer";`}
						<br />
						<br />
						{`<div className={styles["footer-container"]}>
			<Footer />
		</div>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitFooter;
