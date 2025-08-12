import SectionTitle from "../components/SectionTitle/SectionTitle";
import styles from "./uikit.module.css";

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Section Title</h3>

			<div className={styles.component__preview}>
				<SectionTitle title="Authors" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import SectionTitle from "../components/SectionTitle/SectionTitle";`}
						<br />
						<br />
						{`<SectionTitle title="Authors" />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
