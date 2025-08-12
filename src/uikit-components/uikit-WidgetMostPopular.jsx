import WidgetMostPopular from "../components/WidgetMostPopular/WidgetMostPopular";
import styles from "./uikit.module.css";

const UiKitWidgetMostPopular = () => {
    return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Widget Most Popular</h3>

			<div className={styles.component__preview}>
				<WidgetMostPopular />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import WidgetMostPopular from "../components/WidgetMostPopular/WidgetMostPopular";`}
						<br />
						<br />
						{`<WidgetMostPopular />`}
						<br />
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitWidgetMostPopular;