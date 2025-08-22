import Post from "../components/Post/Post";
import styles from "./uikit.module.css";

const UikitPost = () => {
    return (

        <div className={styles.component}>
            <h3 className={styles.component__title}>Post</h3>

            <div className={styles.component__preview}>
                <Post />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Header from "../components/Post/Post";`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UikitPost;
