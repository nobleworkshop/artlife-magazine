import Badge from "../components/Badge/Badge";
import styles from "./uikit.module.css";

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Badge</h3>

			<div className={styles.component__preview}>
				<Badge title="Badge" />
				<Badge title="Badge" link="/" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Badge from "../components/Badge/Badge";`}
						<br />
						<br />
						{`<Badge title="Badge" />`}
						<br />
						{`<Badge title="Badge" link="/" />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
