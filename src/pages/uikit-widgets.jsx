import UiKitWidget from "@uikit/uikit-Widget";
import UiKitWidgetPrintmagazine from "@uikit/uikit-WidgetPrintmagazine";
import UiKitWidgetMostPopular from "@uikit/uikit-WidgetMostPopular";
import UiKitWidgetNewsletter from "@uikit/uikit-WidgetNewsletter";
import styles from "./uikit.module.css";

const UiKitWidgets = () => {
	return (
		<div className="container">
			<h1 className={styles.uikit__title}>
				UiKit
			</h1>
			<div className={styles.uikit__wrapper}>
				<h2 className={styles.uikit__subtitle}>Widgets</h2>

				<UiKitWidget />
				<UiKitWidgetMostPopular />
				<UiKitWidgetPrintmagazine />
				<UiKitWidgetNewsletter />
			</div>
		</div>
	);
};

export default UiKitWidgets;
