import Input from "../components/Input/Input";
import styles from "./uikit.module.css";

const UiKitInput = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Input</h3>

			<div className={styles.component__preview}>
				<Input placeholder="Name" />
				<Input placeholder="Email" type="email" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Input from "../components/Input/Input";`}
						<br />
						<br />
						{`<Input placeholder="Name" />`}
						<br />
						{`<Input placeholder="Email" type="email" />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitInput;
