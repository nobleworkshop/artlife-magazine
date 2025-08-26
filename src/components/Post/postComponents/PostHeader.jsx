import styles from "./../post.module.css";
import DetailsItem from "@components/DetailsItem/DetailsItem";
import Badge from "@components/Badge/Badge";

const PostHeader = ({ title, desc}) => {
	return (
		<div className={styles.postHeader}>
			<div className={styles.postHeader__text}>
				<h2 className={styles.post__title}>{title}</h2>
				<p className={styles.post__desc}>{desc}</p>
			</div>

			<div className={styles.post__detailes}>
				<div className={styles.post__detailesGroup}>
					<DetailsItem title="Text" value="Jakob Gronberg" />
					<DetailsItem title="Date" value="2022-03-16" />
					<DetailsItem title="Duration" value="2" />
				</div>
				<Badge title="label" link="/label" />
			</div>
		</div>
	);
};

export default PostHeader;
