import Instagram from "../components/Socials/Social/Instagram";
import styles from "./uikit.module.css";

const UiKitInstagram = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Иконка Instagram</h3>

			<div className={styles.component__preview}>
				<Instagram link="/Instagram" alt="Instagram" target="_blank" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Instagram from "../../components/Socials/Social/Instagram";`}
						<br />
						<br />
						{`<Instagram link="/Instagram" alt="Instagram" target="_blank" />`}

					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitInstagram;
