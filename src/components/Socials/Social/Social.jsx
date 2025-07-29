import { Link } from "react-router-dom";
// import styles from "./social.module.css";

const Social = ({ link, alt, target }) => {
    return (
        <Link to={link} target={target} >
            <img src="../../../img/inst.svg" alt={alt} />
        </Link>
    );
};

export default Social;