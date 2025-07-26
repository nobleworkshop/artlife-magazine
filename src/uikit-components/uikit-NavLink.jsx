import NavLink from "../components/NavLink/NavLink";
import styles from "./uikit.module.css";

const UiKitNavLink = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>NavLink</h3>

            <div className={styles.component__preview}>
                <NavLink title="magazine" router="/magazine" />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import NavLink from "../components/NavLink/NavLink";`}
                        <br />
                        <br />
                        {`<NavLink title="magazine" router="/magazine" />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitNavLink;
