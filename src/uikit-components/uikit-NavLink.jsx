import NavLink from "../components/Link/Link";
import styles from "./uikit.module.css";

const UiKitLink = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Link</h3>

            <div className={styles.component__preview}>
                <NavLink title="magazine" router="/magazine" />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import NavLink from "../components/Link/Link";`}
                        <br />
                        <br />
                        {`<NavLink title="magazine" router="/magazine" />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitLink;
