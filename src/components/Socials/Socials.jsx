// Socials.jsx
import Instagram from './Social/Instagram';
import Rss from './Social/Rss';
import Twitter from './Social/Twitter';
import YouTube from './Social/YouTube';

import styles from './socials.module.css';

const Socials = ({ invert = false, showRss = true }) => {
	return (
		<div className={styles.socialsContainer}>
			<Instagram
				invert={invert}
				link="/Instagram"
				alt="Instagram"
				target="_blank"
			/>
			<Twitter
				invert={invert}
				link="/twitter"
				alt="Twitter"
				target="_blank"
			/>
			<YouTube
				invert={invert}
				link="/Youtube"
				alt="YouTube"
				target="_blank"
			/>
			{showRss && (
				<Rss invert={invert} link="/rss" alt="rss" target="_blank" />
			)}
		</div>
	);
};

export default Socials;
