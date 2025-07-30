import { Link } from "react-router-dom";
import styles from "./social.module.css";
import youtube from "../../../img/social/youtube.svg";

const YouTube = ({ link, alt, target }) => {
    return (
        <Link to={link} target={target} className={styles.youtube} >
            <img src={youtube} alt={alt} />
        </Link>
    );
};

export default YouTube;