import YouTube from "../components/Socials/Social/YouTube";
import styles from "./uikit.module.css";

const UiKitInstagram = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Иконка YouTube</h3>

			<div className={styles.component__preview}>
				<YouTube link="/Youtube" alt="YouTube" target="_blank" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import YouTube from "../../components/Socials/Social/YouTube";`}
						<br />
						<br />
						{`<YouTube link="/Youtube" alt="YouTube" target="_blank" />`}

					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitInstagram;
