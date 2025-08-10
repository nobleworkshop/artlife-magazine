import CategoriesNavbar from "../components/CategoriesNavbar/CategoriesNavbar";
import styles from "./uikit.module.css";

const UiKitCategoriesNavbar = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Categories Navbar</h3>

            <div className={styles.component__preview}>
                <CategoriesNavbar />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import CategoriesNavbar from "../components/CategoriesNavbar/CategoriesNavbar";`}
                        <br />
                        <br />
                        {`<CategoriesNavbar />`}

                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitCategoriesNavbar;
