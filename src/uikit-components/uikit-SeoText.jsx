import SeoText from "../components/SeoText/SeoText";
import styles from "./uikit.module.css";

const UiKitSeoText = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>SeoText</h3>

            <div className={styles.component__preview}>
                <SeoText text="Design News to your inbox" />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import SeoText from "../components/SeoText/SeoText";`}
                        <br />
                        <br />
                        {`<SeoText text="Design News to your inbox" />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitSeoText;
