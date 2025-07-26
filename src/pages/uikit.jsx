import UiKitButton from "./../uikit-components/uikit-Button";
import UiKitBadge from "./../uikit-components/uikit-Badge";

const UiKit = () => {
	return (
		<div className="container">
			<h1 style={{ fontSize: "32px", fontWeight: 300, marginBottom: "20px" }}>UiKit</h1>

			<div className="components" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<h2>Components</h2>
				<UiKitButton />
				<UiKitBadge />
			</div>
		</div>
	);
}

export default UiKit;