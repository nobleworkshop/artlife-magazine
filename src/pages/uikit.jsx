import UiKitButton from "./../uikit-components/uikit-Button";

const UiKit = () => {
	return (
		<div className="container">
			<h1 style={{ fontSize: "32px", fontWeight: 300, marginBottom: "20px" }}>UiKit</h1>

			<div className="components">
				<h2>Components</h2>
				<UiKitButton />
			</div>
		</div>
	);
}

export default UiKit;