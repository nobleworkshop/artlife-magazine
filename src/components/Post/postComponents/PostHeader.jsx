import styles from "./../post.module.css";
import DetailsItem from "@components/DetailsItem/DetailsItem";
import Badge from "@components/Badge/Badge";

const PostHeader = ({
	title,
	desc,
	authorName,
	date,
	timeToRead,
	badgeName,
	badgeLink
}) => {
	return (
		<div className={styles.postHeader}>
			<div className={styles.postHeader__text}>
				<h2 className={styles.post__title}>{title}</h2>
				<p className={styles.post__desc}>{desc}</p>
			</div>

			<div className={styles.post__detailes}>
				<div className={styles.post__detailesGroup}>
					<DetailsItem title="Author" value={authorName} />
					<DetailsItem title="Date" value={date} />
					<DetailsItem title="Read" value={timeToRead} />
				</div>
				{badgeName && <Badge title={badgeName} link={badgeLink} />}
			</div>
		</div>
	);
};

export default PostHeader;
