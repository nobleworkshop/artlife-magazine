import React from "react";
import styles from "./authorProfile.module.css";
import profileImage from "@img/authors/1.png";
import instagramIcon from "@img/social/instagram.svg";
import twitterIcon from "@img/social/twitter.svg";
import youtubeIcon from "@img/social/youtube.svg";

const AuthorProfile = ({
	authorName = "Louise Jensen",
	shortBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
	longBio = "Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.",
	profileImageSrc = profileImage,
	socialLinks = {
		instagram: "https://instagram.com",
		twitter: "https://twitter.com",
		youtube: "https://youtube.com",
	},
	showSocialSection = true,
}) => {
	const renderSocialIcon = (platform, url, icon, alt) => {
		if (!url) return null;

		return (
			<a
				key={platform}
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.socialLink}
				aria-label={`Follow on ${alt}`}
			>
				<img src={icon} alt={alt} className={styles.socialIcon} />
			</a>
		);
	};

	return (
		<section className={styles.authorProfile}>
			<div className={styles.sidebar}>
				<div className={styles.profileImageContainer}>
					<img
						src={profileImageSrc}
						alt={`${authorName} profile`}
						className={styles.profileImage}
					/>
				</div>

				{showSocialSection && (
					<div className={styles.sidebarContent}>
						<div className={styles.divider}></div>

						<div className={styles.socialSection}>
							<span className={styles.followText}>Follow</span>
							<div className={styles.socialIcons}>
								{renderSocialIcon(
									"instagram",
									socialLinks.instagram,
									instagramIcon,
									"Instagram"
								)}
								{renderSocialIcon(
									"twitter",
									socialLinks.twitter,
									twitterIcon,
									"Twitter"
								)}
								{renderSocialIcon(
									"youtube",
									socialLinks.youtube,
									youtubeIcon,
									"YouTube"
								)}
							</div>
						</div>
					</div>
				)}
			</div>

			<div className={styles.content}>
				<div className={styles.headerSection}>
					<h1 className={styles.authorName}>{authorName}</h1>
					{shortBio && <p className={styles.shortBio}>{shortBio}</p>}
				</div>

				{longBio && <p className={styles.longBio}>{longBio}</p>}
			</div>
		</section>
	);
};

export default AuthorProfile;
