import styles from './input.module.css';

const Input = ({ placeholder }) => {
	return (
		<input
			type="email"
			placeholder={placeholder}
			className={styles["email-input"]}
		/>
	);
};

export default Input;
