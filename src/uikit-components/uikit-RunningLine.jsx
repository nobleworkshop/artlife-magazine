import RunningLine from "../components/RunningLine/RunningLine";
import styles from "./uikit.module.css";

const UiKitRunningLine = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Бегущая строка</h3>

            <div className={styles.component__preview}>
                <RunningLine />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Rss from "../../components/Socials/Social/Rss";`}
                        <br />
                        <br />
                        {`<Rss link="/rss" alt="rss" target="_blank" />`}

                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitRunningLine;
