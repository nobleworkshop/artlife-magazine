import UiKitButton from "./../uikit-components/uikit-Button";
import UiKitBadge from "./../uikit-components/uikit-Badge";
import UiKitInstagram from "../uikit-components/uikit-Instagram";
import UiKitRss from "../uikit-components/uikit-Rss";
import UiKitTwitter from "../uikit-components/uikit-Twitter";
import UiKitYouTube from "../uikit-components/uikit-YouTube";
import UiKitSocials from "../uikit-components/uikit-Socials";

const UiKit = () => {
	return (
		<div className="container">
			<h1 style={{ fontSize: "32px", fontWeight: 300, marginBottom: "20px" }}>UiKit</h1>

			<div className="components" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<h2>Components</h2>
				<UiKitButton />
				<UiKitBadge />
				<UiKitInstagram />
				<UiKitRss />
				<UiKitTwitter />
				<UiKitYouTube />
				<UiKitSocials />
			</div>
		</div>
	);
}

export default UiKit;