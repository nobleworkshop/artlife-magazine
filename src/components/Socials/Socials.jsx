import Rss from "../../components/Socials/Social/Rss";
import YouTube from "../../components/Socials/Social/YouTube";
import Instagram from "../../components/Socials/Social/Instagram";
import Twitter from "../../components/Socials/Social/Twitter";



const Socials = () => {
    return (
        <>
            <Instagram link="/Instagram" alt="Instagram" target="_blank" />
            <Twitter link="/twitter" alt="Twitter" target="_blank" />
            <YouTube link="/Youtube" alt="YouTube" target="_blank" />
            <Rss link="/rss" alt="rss" target="_blank" />
        </>
    );
};
export default Socials;