import UiKitButton from "./../uikit-components/uikit-Button";
import UiKitBadge from "./../uikit-components/uikit-Badge";
import UiKitDetailsItem from "./../uikit-components/uikit-DetailsItem";
import UiKitNavLink from "../uikit-components/uikit-NavLink";
import UiKitLogo from "../uikit-components/uikit-Logo";
import UiKitSocials from "../uikit-components/uikit-Socials";
import UiKitLinkTo from "../uikit-components/uikit-LinkTo";
import UiKitInput from "../uikit-components/uikit-Input";
import UiKitRunningLine from "../uikit-components/uikit-RunningLine";
import UiKitMostPopular from "../uikit-components/uikit-MostPopular";




const UiKit = () => {
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
				<h2>Components</h2>
				<UiKitButton />
				<UiKitBadge />
				<UiKitDetailsItem />
				<UiKitNavLink />
				<UiKitLogo />
				<UiKitSocials />

				<UiKitRunningLine />
				<UiKitLinkTo />
				<UiKitInput />

				<UiKitMostPopular />




			</div>
		</div>
	);
};

export default UiKit;
