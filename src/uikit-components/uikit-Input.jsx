import Input from "../components/Input/Input";
import styles from "./uikit.module.css";

const UiKitArticle = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Input</h3>

            <div className={styles.component__preview}>

				<input type="text" />

            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Article from "../components/Article/Article";`}
                        <br />
                        <br />
                        {`<Article    img={img}
            title="Hope dies last"
            text="Lorem ipsum ..."
            autor="Jakob Gronberg"
            date="16. March 2022"
            timeToRead="1 Min" />`}
                    </code>
                </pre>
            </div>

        </div >
    );
};

export default UiKitArticle;
