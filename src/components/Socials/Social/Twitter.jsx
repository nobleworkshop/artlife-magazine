import { Link } from "react-router-dom";
import styles from "./social.module.css";
import twitter from "../../../img/social/twitter.svg";

const Twitter = ({ link, alt, target, invert = false }) => {
    return (
        <Link to={link} target={target} className={styles.socialLink} >
            <img src={twitter} alt={alt} className={styles.socialIcon + " " + (invert ? styles.invert : "")} />
        </Link>
    );
};

export default Twitter;
