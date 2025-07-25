import Button from "../components/Button/Button";
import styles from "./uikit.module.css";

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Button</h3>

			<div className={styles.component__preview}>
				<Button
					title="Sign up"
					onclick={() => {
						console.log("Click!");
					}}
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Button from "../components/Button/Button";`}
						<br />
						<br />
						{`<Button title="Sign up" onclick={() => {console.log('Click!');}} />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
