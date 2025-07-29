import { Link } from "react-router-dom";
import styles from "./social.module.css";
import twitter from "../../../img/Social/twitter.svg";

const Twitter = ({ link, alt, target }) => {
    return (
        <Link to={link} target={target} className={styles.twitter} >
            <img src={twitter} alt={alt} />
        </Link>
    );
};

export default Twitter;