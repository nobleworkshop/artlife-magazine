import styles from "./articleCard.module.css";
import Badge from "../Badge/Badge";
import DetailsItem from "../DetailsItem/DetailsItem";

const ArticleCard = ({ img, title, text, authorName, date, timeToRead, badgeName, badgeLink }) => {
    return (
        <article className={styles.card}>
			<div className={styles.card__header}>
				<DetailsItem title="Date" value={date} />
				<Badge title={badgeName} link={badgeLink} />
			</div>

            <div className={styles.imageWrapper}>
                <img src={img} alt={title} className={styles.card__image} />
            </div>

			<div className={styles.card__content}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__text}>{text}</p>
			</div>

            <div className={styles.card__details}>
                <DetailsItem title="Text" value={authorName} />
                <DetailsItem title="Duration" value={timeToRead} />
            </div>
        </article>
    );
};

export default ArticleCard;
