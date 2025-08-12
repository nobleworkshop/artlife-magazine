import styles from "./uikit.module.css";
import Widget from "../components/Widget/Widget";

const UiKitWidget = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Widget</h3>

			<div className={styles.component__preview}>
				<Widget title="Widget">
					<p>Widget content</p>
				</Widget>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Widget from "../components/Widget/Widget";`}
						<br />
						<br />
						{`<Widget title="Widget">`}
						<br />
						{`<p>Widget content</p>`}
						<br />
						{`</Widget>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitWidget;
