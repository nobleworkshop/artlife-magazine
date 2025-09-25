import UiKitAuthorArticles from '@uikit/uikit-AuthorArticles';
import UiKitAuthorProfile from '@uikit/uikit-AuthorProfile';
import UiKitBadge from '@uikit/uikit-Badge';
import UiKitButton from '@uikit/uikit-Button';
import UiKitCopyright from '@uikit/uikit-Copyright';
import UiKitDetailsItem from '@uikit/uikit-DetailsItem';
import UiKitInput from '@uikit/uikit-Input';
import UiKitLinkTo from '@uikit/uikit-LinkTo';
import UiKitLogo from '@uikit/uikit-Logo';
import UiKitMostPopular from '@uikit/uikit-MostPopular';
import UiKitNavLink from '@uikit/uikit-NavLink';
import UiKitPodcastListItem from '@uikit/uikit-PodcastListItem';
import UiKitRunningLine from '@uikit/uikit-RunningLine';
import UiKitSectionTitle from '@uikit/uikit-SectionTitle';
import UiKitSocials from '@uikit/uikit-Socials';

import styles from './uikit.module.css';

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
				<UiKitAuthorProfile />
				<UiKitAuthorArticles />
			</div>
		</div>
	);
};

export default UiKit;
