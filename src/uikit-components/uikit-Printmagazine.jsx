import Printmagazine from "../components/Printmagazine/Printmagazine";
import styles from "./uikit.module.css";

const UiKitPrintmagazine = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Printmagazine</h3>

            <div className={styles.component__preview}>
                <Printmagazine />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Printmagazine from "../components/Printmagazine/Printmagazine";`}
                        <br />
                        <br />
                        {`<Printmagazine />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitPrintmagazine;