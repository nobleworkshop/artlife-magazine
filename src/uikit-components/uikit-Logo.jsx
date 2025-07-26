/**
 * @Component Logo
 * @import import Logo from "../components/Logo/Logo"
 * @useLink <Logo alter="Название сайта" link="/" />
 * @useUnLink <Logo alter="Badge" />
 * @param alter = "наименование свойства alt"
 * @param link = передается если логотип используется как ссылка
 */

import Logo from "../components/Logo/Logo";
import styles from "./uikit.module.css";

const UiKitButton = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Badge</h3>

            <div className={styles.component__preview}>
                <Logo alter="Название сайта" />
                <Logo alter="Название сайта" link="/" />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Logo from "../components/Logo/Logo";`}
                        <br />
                        <br />
                        {`<Logo alter="Badge" />`}
                        <br />
                        {`<Logo alter="Badge" link="/" />`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitButton;
