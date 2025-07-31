import Header from "../components/Header/Header";
import styles from "./uikit.module.css";
import img from "../img/Art&Life.jpg";

const UikitHeader = () => {
    return (

        <div className={styles.component}>
            <h3 className={styles.component__title}>Header</h3>

            <div className={styles.component__preview}>
                <Header titleImg={img} />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Header from "../components/Header/Header";`}
                        <br />
                        <br />
                        {`<Header titleImg={img} />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UikitHeader;