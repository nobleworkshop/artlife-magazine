import styles from "./article.module.css";
import Badge from "../Badge/Badge";


const Article = ({ img, title, text, info_text, info_date, info_read }) => {
    return (

        <div className={styles.article}>
            <div className={styles.img}>
                <img src={img} alt="image" />
            </div>

            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.footer}>
                    <div className={styles.info}>
                        <div><span className={styles.info__item}>Text</span>{info_text}</div>
                        <div><span className={styles.info__item}>Date</span>{info_date}</div>
                        <div><span className={styles.info__item}>Read</span>{info_read}</div>
                    </div>

                    <div>
                        <Badge title="Badge" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Article;