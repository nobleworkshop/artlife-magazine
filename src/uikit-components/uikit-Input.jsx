import styles from "./uikit.module.css";
import Input from "../components/Input/Input";

const UiKitInput = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Input</h3>

			<div className={styles.component__preview + " " + styles['component__preview--column'] + " " + styles['component__preview--dark-bg']}>
				<Input placeholder="Enter name" />
				<Input placeholder="Enter your email" type="email" />
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import Input from "../components/Input/Input";`}
						<br />
						<br />
						{`<Input placeholder="Enter name" />`}
						<br />
						{`<Input placeholder="Enter your email" type="email" />`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitInput;
