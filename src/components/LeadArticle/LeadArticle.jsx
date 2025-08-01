import Badge from "../Badge/Badge";
import styles from "./leadArticle.module.css";
import DetailsItem from "../DetailsItem/DetailsItem";

const LeadArticle = ({ title, img, text, author, date, timeToRead, badge, badgeLink }) => {
	return (
		<article className={styles["lead-article"]}>
			<div className={styles["lead-article-content"]}>
				<div className={styles["lead-article-content__title"]}>
					{title}
				</div>
				<div className={styles["lead-article-content__wrapper"]}>
					<div className={styles["lead-article-content__text"]}>
						{text}
					</div>
					<div className={styles["lead-article-content__description"]}>
						<div className={styles["lead-article-content__details"]}>
							<DetailsItem title="Text" value={author} />
							<DetailsItem title="Date" value={date} />
							<DetailsItem title="Duration" value={timeToRead} />
						</div>
						{badge && <Badge title={badge} link={badgeLink} />}
					</div>
				</div>
			</div>
			<div className={styles["lead-article-content__img"]}>{img}</div>
		</article>
	);
};

export default LeadArticle;
