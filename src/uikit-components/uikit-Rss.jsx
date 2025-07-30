import Rss from "../components/Socials/Social/Rss";
import styles from "./uikit.module.css";

const UiKitRss = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Иконка Rss</h3>

			<div className={styles.component__preview}>
				<Rss link="/rss" alt="rss" target="_blank" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Rss from "../../components/Socials/Social/Rss";`}
						<br />
						<br />
						{`<Rss link="/rss" alt="rss" target="_blank" />`}

					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitRss;
