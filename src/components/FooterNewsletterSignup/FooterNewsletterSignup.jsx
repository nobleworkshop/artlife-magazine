import React, { useState } from 'react'
import styles from './footernewsletterSignup.module.css'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки email
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className={styles.newsletterSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>DESIGN NEWS TO YOUR INBOX</span>
        </h2>
        </div>

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
    </div>
  )
}

export default NewsletterSignup
