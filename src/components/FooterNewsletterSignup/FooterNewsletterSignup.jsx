import styles from './styles.module.css';

const NewsletterSignup = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail('');
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>DESIGN NEWS TO YOUR INBOX</h2>

			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={styles.emailInput}
					required
				/>
				<button type="submit" className={styles.signupButton}>
					SIGN UP
				</button>
			</form>
		</div>
	);
};

export default NewsletterSignup;
