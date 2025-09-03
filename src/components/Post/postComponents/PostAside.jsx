import styles from "./../post.module.css";
import DetailsItem from "@components/DetailsItem/DetailsItem";

const PostAside = ({ authorPhoto, authorName, date, timeToRead }) => {
  return (
    <aside className={styles.post__author}>
      <div className={styles.post__authorInfo}>
        {authorPhoto && (
          <img
            src={authorPhoto}
            alt={authorName}
            className={styles.photo}
          />
        )}
        <h3 className={styles.name}>{authorName}</h3>
      </div>

      <hr className={styles.divider} />

      <div className={styles.post__detailsItems}>
        <DetailsItem title="Date" value={date} />
        <DetailsItem title="Read" value={timeToRead} />
        <DetailsItem title="Share" />
      </div>
    </aside>
  );
};

export default PostAside;
