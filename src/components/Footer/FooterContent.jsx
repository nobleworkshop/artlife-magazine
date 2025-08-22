import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import styles from "./footerContent.module.css";

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
		<>
			<div className={styles["footer-content"]}>
				<div className={styles["footer-brand-wrapper"]}>
					<h3 className={styles["footer-brand-title"]}>FYRRE MAGAZINE</h3>
				</div>

				<div className={styles["footer-navigation-wrapper"]}>
					<div className={styles["footer-navigation-column"]}>
						{navigationLinks.firstColumn.map((link, index) => (
							<Link className={styles["footer-navigation-link"]} key={index} to={link.href}>
								{link.text}
							</Link>
						))}
					</div>
					<div className={styles["footer-navigation-column"]}>
						{navigationLinks.secondColumn.map((link, index) => (
							<Link className={styles["footer-navigation-link"]} key={index} to={link.href}>
								{link.text}
							</Link>
						))}
					</div>
					<div className={styles["footer-navigation-column"]}>
						{navigationLinks.thirdColumn.map((link, index) => (
							<Link className={styles["footer-navigation-link"]} key={index} to={link.href}>
								{link.text}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className={styles["footer-copyright"]}>
				<p className={styles["footer-copyright-text"]}>
					© Made by Pawel Gola - Powered by Webflow
				</p>
				<div className={styles["footer-copyright-socials"]}>
					<Socials invert={true} />
				</div>
			</div>
		</>
	);
};

export default FooterContent;
