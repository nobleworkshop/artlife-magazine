import { Link } from "react-router-dom";
import styles from "./social.module.css";
import instagram from "../../../img/social/instagram.svg";

const Instagram = ({ link, alt, target }) => {
    return (
        <Link to={link} target={target} className={styles.Instagram}>
            <img src={instagram} alt={alt} />
        </Link>
    );
};

export default Instagram;