import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import styles from './newsletterSection.module.css'

const NewsletterSection = () => {
  return (
    <section className={styles.newsletterSection}>
      <Newsletter />
      <Footer />
    </section>
  )
}

export default NewsletterSection
