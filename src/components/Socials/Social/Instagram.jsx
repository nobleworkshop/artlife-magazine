import { Link } from "react-router-dom";
import styles from "./social.module.css";
import instagram from "../../../img/social/instagram.svg";

const Instagram = ({ link, alt, target, invert = false }) => {
    return (
        <Link to={link} target={target} className={styles.socialLink}>
            <img src={instagram} alt={alt} className={styles.socialIcon + " " + (invert ? styles.invert : "")} />
        </Link>
    );
};

export default Instagram;
