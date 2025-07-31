import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import Link from "../Link/Link";
import Socials from "../Socials/Socials";
import img from "../../img/line.png"

const Header = ({ }) => {
    return (
        <div className={styles.header}>
            <div className="logo"> <Logo alt="логотип сайта" /></div>
            <div className={styles.nav}>
                <Link link="/magazine" title="Magazine" />
                <Link link="/authors" title="Authors" />
                <Link link="/podcast" title="Podcast" />
                <img src={img} alt="line" />
                <div className={styles.socials}> <Socials /></div>
            </div>
        </div>


    )
}

export default Header;