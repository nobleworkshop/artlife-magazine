import styles from "./../post.module.css";
import DetailsItem from "@components/DetailsItem/DetailsItem";
import Badge from "@components/Badge/Badge";

const PostHeader = ({ data }) => {
  return (
    <div className={styles.postHeader}>
      <div className={styles.postHeader__text}>
        <h2 className={styles.post__title}>{data.title}</h2>
        <p className={styles.post__desc}>{data.desc}</p>
      </div>

      <div className={styles.post__detailes}>
        <div className={styles.post__detailesGroup}>
          <DetailsItem title="Author" value={data.authorName} />
          <DetailsItem title="Date" value={data.date} />
          <DetailsItem title="Read" value={data.timeToRead} />
        </div>
        {data.badgeName && <Badge title={data.badgeName} link={data.badgeLink} />}
      </div>
    </div>
  );
};

export default PostHeader;
