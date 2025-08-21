import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import styles from "./footer.module.css";

const FooterContent = () => {
	const navigationLinks = {
		firstColumn: [
			{ text: "Art", href: "/art" },
			{ text: "Design", href: "/design" },
			{ text: "Architecture", href: "/architecture" },
		],
		secondColumn: [
			{ text: "Magazine", href: "/magazine" },
			{ text: "Podcast", href: "/podcast" },
			{ text: "Authors", href: "/authors" },
		],
		thirdColumn: [
			{ text: "Styleguide", href: "/styleguide" },
			{ text: "Licensing", href: "/licensing" },
			{ text: "Changelog", href: "/changelog" },
		],
	};

	return (


					<div className={styles.navigationSection}>
						<div className={styles.navColumn}>
							{navigationLinks.firstColumn.map((link, index) => (
								<Link
									key={index}
									to={link.href}
									className={styles.footerLink}
								>
									{link.text}
								</Link>
							))}
						</div>

						<div className={styles.navColumn}>
							{navigationLinks.secondColumn.map((link, index) => (
								<Link
									key={index}
									to={link.href}
									className={styles.footerLink}
								>
									{link.text}
								</Link>
							))}
						</div>

						<div className={styles.navColumn}>
							{navigationLinks.thirdColumn.map((link, index) => (
								<Link
									key={index}
									to={link.href}
									className={styles.footerLink}
								>
									{link.text}
								</Link>
							))}
						</div>
					</div>
				</div>


				<div className={styles.bottomSection}>
					<div className={styles.bottomContainer}>

					</div>
				</div>


		);
}

export default FooterContent;