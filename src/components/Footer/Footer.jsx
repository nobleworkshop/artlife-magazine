import styles from './footer.module.css'
import Socials from '../Socials/Socials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.brandName}>FYRRE MAGAZINE</h3>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.navColumn}>
            <a href="/art" className={styles.navLink}>Art</a>
            <a href="/design" className={styles.navLink}>Design</a>
            <a href="/architecture" className={styles.navLink}>Architecture</a>
          </div>

          <div className={styles.navColumn}>
            <a href="/magazine" className={styles.navLink}>Magazine</a>
            <a href="/podcast" className={styles.navLink}>Podcast</a>
            <a href="/authors" className={styles.navLink}>Authors</a>
          </div>

          <div className={styles.navColumn}>
            <a href="/styleguide" className={styles.navLink}>Styleguide</a>
            <a href="/licensing" className={styles.navLink}>Licensing</a>
            <a href="/changelog" className={styles.navLink}>Changelog</a>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>
          <p>© 2025 FYRRE MAGAZINE. ALL RIGHTS RESERVED.</p>
		</div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default Footer
