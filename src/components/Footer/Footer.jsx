import { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./fotter.module.css";

const Footer = () => {
	const [email, setEmail] = useState('')
	const [isSubscribed, setIsSubscribed] = useState(false)

	const handleSubmit = (e) => {
	  e.preventDefault()
	  if (email.trim()) {
		console.log('Newsletter subscription:', email)
		setIsSubscribed(true)
		setEmail('')

		setTimeout(() => setIsSubscribed(false), 3000);
	  }
	};
	return (
		<footer className={styles.newsletterSection}>
			<section className={styles.newsletter}>
				<div className={styles.runningLine}>
					<div className={styles.runningText}>
						Newsletter+++Newsletter+++Newsletter+++Newsletter+++Newsletter+++Newsletter+++Newsletter+++Newsletter+++
					</div>
				</div>

				<div className={styles.container}>
					<div className={styles.content}>
						<h2 className={styles.title}>
							Design News to your inbox
						</h2>
						<form onSubmit={handleSubmit} className={styles.form}>
							<div className={styles.inputGroup}>
								<Input
									type="email"
									className={styles.input}
									placeholder="Email"
								/>
								<Button
									title="Sign up"
									className={styles.button}
									onclick={() => {
										console.log("Click!");
									}}
								/>
							</div>
							{isSubscribed && (
								<p className={styles.success}>
									Thank you for subscribing!
								</p>
							)}
						</form>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
