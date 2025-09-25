import FooterNewsletterSignup from '../FooterNewsletterSignup/FooterNewsletterSignup';
import FooterRunningLine from '../FooterRunningLine/FooterRunningLine';

import FooterContent from './FooterContent';

import styles from './footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			{/* Бегущая строка */}
			<FooterRunningLine />

			<div className={`container ${styles['footer__container']}`}>
				{/* Секция подписки на рассылку */}
				<FooterNewsletterSignup />

				{/* Секция контента */}
				<FooterContent />
			</div>
		</footer>
	);
};

export default Footer;
