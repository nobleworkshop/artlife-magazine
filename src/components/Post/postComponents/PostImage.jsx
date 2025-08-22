import styles from "./post.module.css";

const PostImage = ({ img, alt }) => {
  return (
    <div className={styles.post__image}>
      <img src={img} alt={alt || "Post image"} className={styles.post__img} />
    </div>
  );
};

export default PostImage;
