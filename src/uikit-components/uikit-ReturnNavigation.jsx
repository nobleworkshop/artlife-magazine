import ReturnNavigation from "../components/ReturnNavigation/ReturnNavigation";
import styles from "./uikit.module.css";

const UiKitReturnNavigation = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Return Navigation</h3>

            <div className={styles.component__preview}>
                <ReturnNavigation title="magazine" link='/' />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import ReturnNavigation from "../components/ReturnNavigation/ReturnNavigation";`}
                        <br />
                        <br />
                        {`<ReturnNavigation />`}

                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitReturnNavigation;
