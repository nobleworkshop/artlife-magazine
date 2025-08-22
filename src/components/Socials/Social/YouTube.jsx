import { Link } from "react-router-dom";
import styles from "./social.module.css";
import youtube from "../../../img/social/youtube.svg";

const YouTube = ({ link, alt, target, invert = false }) => {
    return (
        <Link to={link} target={target} className={styles.socialLink} >
            <img src={youtube} alt={alt} className={styles.socialIcon + " " + (invert ? styles.invert : "")} />
        </Link>
    );
};

export default YouTube;
