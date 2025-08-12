import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import styles from "./uikit.module.css";

const UiKitNewsletterSection = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Newsletter Section</h3>

            <div className={styles.component__preview}>
                <NewsletterSection/>
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import NewsletterSection from "../components/NewsletterSection/NewsletterSection";`}
                        <br />
                        <br />
                        {`<NewsletterSection />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitNewsletterSection;
