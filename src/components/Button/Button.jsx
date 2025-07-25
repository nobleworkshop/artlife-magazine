import styles from "./button.module.css";

const Button = ({title, onclick}) => {
	return (
		<button onClick={() => onclick()} className={styles.button}>
			{title}
		</button>
	);
}

export default Button;