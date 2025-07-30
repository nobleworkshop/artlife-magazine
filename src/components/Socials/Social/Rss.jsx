import { Link } from "react-router-dom";
import rss from "../../../img/social/rss.svg";
import styles from "./social.module.css";

const Rss = ({ link, alt, target }) => {
    return (
        <Link to={link} target={target} className={styles.rss} >
            <img src={rss} alt={alt} />
        </Link>
    );
};

export default Rss;