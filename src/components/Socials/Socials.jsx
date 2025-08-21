import Rss from "./Social/Rss";
import YouTube from "./Social/YouTube";
import Instagram from "./Social/Instagram";
import Twitter from "./Social/Twitter";
import styles from "./socials.module.css";

const Socials = () => {
    return (
        <div className={styles.socialsContainer}>
            <Instagram link="/Instagram" alt="Instagram" target="_blank" />
            <Twitter link="/twitter" alt="Twitter" target="_blank" />
            <YouTube link="/Youtube" alt="YouTube" target="_blank" />
            <Rss link="/rss" alt="rss" target="_blank" />
        </div>
    );
};
export default Socials;
