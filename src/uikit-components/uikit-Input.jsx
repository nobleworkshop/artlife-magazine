import Input from "../components/Input/Input";
import styles from "./uikit.module.css";

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Input</h3>

			<div className={styles.component__preview}>
				<Input placeholder='Email'/>
				</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Input from "../components/Input/Input";`}
						<br />
						<br />
						{`<Input placeholder="Email" />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
