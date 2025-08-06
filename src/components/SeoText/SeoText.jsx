import styles from "./seoText.module.css";
const SeoText = ({ text }) => {
    return (
        <>
            <div className={styles.stext}>{text}</div>
        </>
    );
}

export default SeoText;