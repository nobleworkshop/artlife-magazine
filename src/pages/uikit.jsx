import UiKitButton from "@uikit/uikit-Button";
import UiKitBadge from "@uikit/uikit-Badge";
import UiKitDetailsItem from "@uikit/uikit-DetailsItem";
import UiKitNavLink from "@uikit/uikit-NavLink";
import UiKitLogo from "@uikit/uikit-Logo";
import UiKitSocials from "@uikit/uikit-Socials";
import UiKitLinkTo from "@uikit/uikit-LinkTo";
import UiKitCopyright from "@uikit/uikit-Copyright";
import UiKitInput from "@uikit/uikit-Input";
import UiKitRunningLine from "@uikit/uikit-RunningLine";
import UiKitMostPopular from "@uikit/uikit-MostPopular";
import UiKitSectionTitle from "@uikit/uikit-SectionTitle";
import UiKitPodcastListItem from "@uikit/uikit-PodcastListItem";
import styles from "./uikit.module.css";

const UiKit = () => {
	return (
		<div className="container">
			<h1 className={styles.uikit__title}>UiKit</h1>
			<div className={styles.uikit__wrapper}>
				<h2 className={styles.uikit__subtitle}>Components</h2>
				<UiKitButton />
				<UiKitBadge />
				<UiKitDetailsItem />
				<UiKitNavLink />
				<UiKitLogo />
				<UiKitSocials />
				<UiKitRunningLine />
				<UiKitLinkTo />
				<UiKitCopyright />
				<UiKitInput />
				<UiKitMostPopular />
				<UiKitSectionTitle />
				<UiKitPodcastListItem />
			</div>
		</div>
	);
};

export default UiKit;
