import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import Link from "../Link/Link";
import Socials from "../Socials/Socials";
import img from "../../img/line.png"


const Header = ({ title }) => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}> <Logo alt="логотип сайта" /></div>
                <div className={styles.nav}>
                    <Link link="/magazine" title="Magazine" />
                    <Link link="/authors" title="Authors" />
                    <Link link="/podcast" title="Podcast" />
                    <img className={styles.icon} src={img} alt="line" />
                    <div className={styles.socials}> <Socials /></div>
                </div>
            </div>

            <div className={styles.line}></div>

            {title && (
                <div className="title"> <img src={title} alt="image" /></div>
            )}
            {!title && (
                <div className="title"></div>
            )}
        </header>
    )
}

export default Header;