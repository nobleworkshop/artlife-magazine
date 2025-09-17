import styles from "./../post.module.css";
import PostAside from "./PostAside";

const PostText = ({ text }) => {
  if (!text) return null;

  return (
    <div
      className="post__text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};


const PostContent = ({ data, children }) => {
  return (
    <div className={styles.postContent}>
      {data.img && (
        <div className={styles.post__img}>
          <img src={data.img} alt="Post image" />
        </div>
      )}
      <div className={styles.post__wrapper}>
        <PostAside data={data} />
        <div className={styles.post__main}>{children}</div>
      </div>
      <hr className={styles.post__line} />
    </div>
  );
};

export { PostText };
export default PostContent;
