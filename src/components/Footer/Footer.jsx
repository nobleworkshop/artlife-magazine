import React from 'react'
import Socials from '../Socials/Socials'
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup'
import RunningLine from '../RunningLine/RunningLine'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

const Footer = () => {
  const navigationLinks = {
    firstColumn: [
      { text: 'Art', href: '/art' },
      { text: 'Design', href: '/design' },
      { text: 'Architecture', href: '/architecture' }
    ],
    secondColumn: [
      { text: 'Magazine', href: '/magazine' },
      { text: 'Podcast', href: '/podcast' },
      { text: 'Authors', href: '/authors' }
    ],
    thirdColumn: [
      { text: 'Styleguide', href: '/styleguide' },
      { text: 'Licensing', href: '/licensing' },
      { text: 'Changelog', href: '/changelog' }
    ]
  }

  return (
    <footer className={styles.footer}>
      {/* Бегущая строка */}
      <RunningLine />

      {/* Секция подписки на рассылку */}
      <NewsletterSignup />

      <div className={styles.container}>
        {/* FYRRE MAGAZINE */}
        <div className={styles.brandSection}>
          <h3 className={styles.brandTitle}>FYRRE MAGAZINE</h3>
        </div>

        {/* Навигационные ссылки */}
        <div className={styles.navigationSection}>
          <div className={styles.navColumn}>
            {navigationLinks.firstColumn.map((link, index) => (
              <Link key={index} to={link.href} className={styles.footerLink}>
                {link.text}
              </Link>
            ))}
          </div>

          <div className={styles.navColumn}>
            {navigationLinks.secondColumn.map((link, index) => (
              <Link key={index} to={link.href} className={styles.footerLink}>
                {link.text}
              </Link>
            ))}
          </div>

          <div className={styles.navColumn}>
            {navigationLinks.thirdColumn.map((link, index) => (
              <Link key={index} to={link.href} className={styles.footerLink}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Нижний блок с копирайтом и социальными сетями */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © Made by Pawel Gola - Powered by Webflow
          </p>
          <div className={styles.socialsSection}>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
