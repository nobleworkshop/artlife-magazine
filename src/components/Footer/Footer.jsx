import React from 'react'
import Logo from '../Logo/Logo'
import Socials from '../Socials/Socials'
import LinkTo from '../LinkTo/LinkTo'
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
      <div className={styles.container}>
        {/* Логотип и копирайт */}
        <div className={styles.brandSection}>
          <Logo />
          <p className={styles.copyright}>
            © Made by Pawel Gola - Powered by Webflow
          </p>
        </div>

        {/* Навигационные ссылки */}
        <div className={styles.navigationSection}>
          <div className={styles.navColumn}>
            {navigationLinks.firstColumn.map((link, index) => (
              <LinkTo key={index} title={link.text} link={link.href} />
            ))}
          </div>

          <div className={styles.navColumn}>
            {navigationLinks.secondColumn.map((link, index) => (
              <LinkTo key={index} title={link.text} link={link.href} />
            ))}
          </div>

          <div className={styles.navColumn}>
            {navigationLinks.thirdColumn.map((link, index) => (
              <LinkTo key={index} title={link.text} link={link.href} />
            ))}
          </div>
        </div>

        {/* Социальные сети */}
        <div className={styles.socialsSection}>
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default Footer
