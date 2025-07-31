import styles from "./runningLine.module.css";

const RunningLine = () => {
    return (
        <>
            <div className={styles.runningLine}>
                <div className={styles.ticker}>News Ticker+++</div>
                <div className={styles.line}>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</div>
                <div className={styles.line}>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</div>
                <div className={styles.line}>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</div>
            </div>
        </>
    );
}

export default RunningLine;