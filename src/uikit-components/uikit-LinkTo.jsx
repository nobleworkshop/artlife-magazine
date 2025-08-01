import LinkTo from "../components/LinkTo/LinkTo";
import styles from "./uikit.module.css";

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Link to</h3>

			<div className={styles.component__preview}>
				<LinkTo title="all articles" link="/" direction="right"/>

				<LinkTo title="go back" link="/" direction="left"/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import LinkTo from "../components/LinkTo/LinkTo";`}
						<br />
						<br />
						{`<LinkTo title="all articles" link="/articles" direction="right" />`}
						<br />
						{`<LinkTo title="go back" link="/" direction="left" />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
