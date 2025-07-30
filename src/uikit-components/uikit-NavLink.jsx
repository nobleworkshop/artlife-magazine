import Link from "../components/Link/Link";
import styles from "./uikit.module.css";

const UiKitLink = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Link</h3>

            <div className={styles.component__preview}>
                <Link to="/magazine" title="magazine" />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Link from "../components/Link/Link";`}
                        <br />
                        <br />
                        {`<Link link="/magazine" title="magazine" />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitLink;
