import Newsletter from "../components/Newsletter/Newsletter";
import styles from "./uikit.module.css";

const UiKitNewsletter = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Newsletter</h3>

            <div className={styles.component__preview}>
                <Newsletter />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Newsletter from "../components/Newsletter/Newsletter";`}
                        <br />
                        <br />
                        {`<Newsletter />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitNewsletter;