import styles from "./article.module.css";
import Badge from "../Badge/Badge";

const Article = ({ img, title, text, autor, date, timeToRead, badgeName, badgeLink }) => {
    return (
        <div className={styles.article}>
            <div className={styles.image}>
                <img src={img} alt="image" />
            </div>

            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                </div>

                <div className={styles.footer}>
                    <div className={styles.info}>
                        <div><span className={styles.info__item}>Text</span>{autor}</div>
                        <div><span className={styles.info__item}>Date</span>{date}</div>
                        <div><span className={styles.info__item}>Read</span>{timeToRead}</div>
                    </div>

                    <div className="badge">
                        <Badge title={badgeName} link={badgeLink} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;