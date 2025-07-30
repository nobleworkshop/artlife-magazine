import Article from "../components/Article/Article";
import image from "../img/diogo.png";
import styles from "./uikit.module.css";

const UiKitArticle = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Article</h3>

            <div className={styles.component__preview}>

                <Article
                    img={image}
                    title="Hope dies last"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
                    autor="Jakob Gronberg"
                    date="16. March 2022"
                    timeToRead="1 Min"
                    badgeName="ART"
                    badgeLink="/art" />

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
            info_text="Jakob Gronberg"
            info_date="16. March 2022"
            info_read="1 Min" />`}
                    </code>
                </pre>
            </div>

        </div >
    );
};

export default UiKitArticle;