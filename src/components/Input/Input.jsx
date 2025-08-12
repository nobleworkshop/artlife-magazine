import styles from './input.module.css';

const Input = ({ placeholder, type = "text" }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={styles["input"]}
		/>
	);
};

export default Input;
