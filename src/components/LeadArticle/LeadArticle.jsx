import Badge from "../Badge/Badge";
import styles from "./leadArticle.module.css";
import DetailsItem from "../DetailsItem/DetailsItem";

const LeadArticle = ({ title, img, text}) => {
	return (
		<div className={styles["lead-article"]}>
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
							<DetailsItem title="Text" value="Jacob Gronberg"/>
							<DetailsItem title="Date" value="2022-03-16"/>
							<DetailsItem title="Duration" value="1"/>
						</div>
							<Badge title="Label" link="/" />
					</div>
				</div>
			</div>
			<div className={styles["lead-article-content__img"]}>{img}</div>
		</div>
	);
};

export default LeadArticle;
