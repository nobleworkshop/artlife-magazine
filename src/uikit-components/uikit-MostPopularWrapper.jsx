import MostPopularWrapper from "../components/MostPopularWrapper/MostPopularWrapper";
import styles from "./uikit.module.css";

const UiKitMostPopularWrapper = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>MostPopularWrapper</h3>

            <div className={styles.component__preview}>
                <MostPopularWrapper />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import MostPopularWrapper from "../components/MostPopularWrapper/MostPopularWrapper";`}
                        <br />
                        <br />
                        {`<MostPopularWrapper />`}
                        <br />
    
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitMostPopularWrapper;