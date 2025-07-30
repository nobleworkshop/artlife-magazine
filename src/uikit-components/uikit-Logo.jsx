/**
 * @Component Logo
 * @import import Logo from "../components/Logo/Logo"
 * @useLink <Logo alt="Название сайта" link="/" />
 * @useUnLink <Logo alt="Название сайта" />
 * @param alt = "наименование свойства alt"
 * @param link = передается если логотип используется как ссылка
 */

import Logo from "../components/Logo/Logo";
import styles from "./uikit.module.css";

const UiKitLogo = () => {
    return (
        <div className={styles.component}>
            <h3 className={styles.component__title}>Logo</h3>

            <div className={styles.component__preview}>
                <p>Логотип когда не ссылка : </p>
                <Logo alt="Название сайта" /> <br />
                <p>Логотип является ссылкой</p>
                <Logo alt="Название сайта" link="/" />
            </div>

            <div className={styles.component__code}>
                <pre>
                    <code>
                        {`import Logo from "../components/Logo/Logo";`}
                        <br />
                        <br />
                        {`<Logo alt="логотип сайта" /> - Когда необходим логотип сайта без ссылки`}
                        <br />
                        {`<Logo alt="логотип сайта" link="/" />  - Для отображения логотипа ссылкой`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default UiKitLogo;
