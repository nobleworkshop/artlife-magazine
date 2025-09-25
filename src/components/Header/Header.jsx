import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

import styles from './header.module.css';
import artlife from '../../img/header-titles/art&life.svg';
import authors from '../../img/header-titles/authors.svg';
import magazine from '../../img/header-titles/magazine.svg';
import podcast from '../../img/header-titles/podcast.svg';

const Header = ({ title = '' }) => {
	return (
		<header>
			<div className={styles.header}>
				<div className={styles.logo}>
					<Logo alt="логотип сайта" />
				</div>
				<nav className={styles.nav}>
					<Link link="/magazine" title="Magazine" />
					<Link link="/authors" title="Authors" />
					<Link link="/podcast" title="Podcast" />
					<div className={styles.nav__devider}></div>
					<div className={styles.socials}>
						<Socials />
					</div>
				</nav>
			</div>

			{title === 'art&life' && (
				<div className="title">
					<img src={artlife} alt={title} />
				</div>
			)}

			{title === 'authors' && (
				<div className="title">
					<img src={authors} alt={title} />
				</div>
			)}

			{title === 'magazine' && (
				<div className="title">
					<img src={magazine} alt={title} />
				</div>
			)}

			{title === 'podcast' && (
				<div className="title">
					<img src={podcast} alt={title} />
				</div>
			)}
		</header>
	);
};

export default Header;
