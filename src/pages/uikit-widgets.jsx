import UiKitWidget from "../uikit-components/uikit-Widget";
import UiKitWidgetPrintmagazine from "../uikit-components/uikit-WidgetPrintmagazine";
import UiKitWidgetMostPopular from "../uikit-components/uikit-WidgetMostPopular";
import UiKitWidgetNewsletter from "../uikit-components/uikit-WidgetNewsletter";

const UiKitWidgets = () => {
	return (
		<div className="container">
			<h1
				style={{
					fontSize: "32px",
					fontWeight: 300,
					marginBottom: "20px",
				}}
			>
				UiKit
			</h1>
			<div
				className="components"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<h2>Widgets</h2>

				<UiKitWidget />
				<UiKitWidgetMostPopular />
				<UiKitWidgetPrintmagazine />
				<UiKitWidgetNewsletter />
			</div>
		</div>
	);
};

export default UiKitWidgets;
