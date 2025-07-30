import Twitter from "../components/Socials/Social/Twitter";
import styles from "./uikit.module.css";

const UiKitRss = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Иконка Twitter</h3>

			<div className={styles.component__preview}>
				<Twitter link="/twitter" alt="Twitter" target="_blank" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Twitter from "../../components/Socials/Social/Twitter";`}
						<br />
						<br />
						{`<Twitter link="/twitter" alt="Twitter" target="_blank" />`}

					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitRss;
