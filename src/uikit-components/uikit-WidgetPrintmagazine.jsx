import WidgetPrintmagazine from "../components/WidgetPrintmagazine/WidgetPrintmagazine";
import styles from "./uikit.module.css";

const UiKitPrintmagazine = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Printmagazine</h3>

            <div className={styles.component__preview}>
                <WidgetPrintmagazine />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import WidgetPrintmagazine from "../components/WidgetPrintmagazine/WidgetPrintmagazine";`}
                        <br />
                        <br />
                        {`<WidgetPrintmagazine />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitPrintmagazine;