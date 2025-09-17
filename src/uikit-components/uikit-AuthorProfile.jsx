import styles from "./uikit.module.css";
import AuthorProfile from "../components/AuthorProfile/AuthorProfile";

const UiKitAuthorProfile = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Article Cards section</h3>

			<div
				className={
					styles.component__preview +
					" " +
					styles["component__preview--column"]
				}
			>
				<AuthorProfile />
			</div>
			<div className={styles.component__code}>
				<pre>
					<code>
						{`import AuthorProfile from "@components/AuthorProfile/AuthorProfile";`}
						<br />
						<br />
						{`<AuthorProfile />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthorProfile;
