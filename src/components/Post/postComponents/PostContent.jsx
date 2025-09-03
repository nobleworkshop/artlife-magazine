import styles from "./../post.module.css";
import PostAside from "./PostAside";

const PostText = ({ text, textArray, boldFirst = false }) => {
  const paragraphs = textArray || (text ? text.split("\n\n") : []);
  if (!paragraphs.length) return null;

  return (
    <>
      {paragraphs.map((p, index) => (
        <p
          key={index}
          className={
            index === 0 && boldFirst
              ? styles.post__textBold
              : styles.post__text
          }
        >
          {p}
        </p>
      ))}
    </>
  );
};

const PostQuote = ({ quoteText, quoteAuthor }) => {
  if (!quoteText) return null;
  return (
    <blockquote className={styles.post__quote}>
      <div className={styles.post__quoteTextWrapper}>
        <div className={styles.quotesElement}>“</div>
        <div className={styles.post__quoteContent}>
          <p className={styles.post__quoteText}>{quoteText}</p>
          {quoteAuthor && (
            <cite className={styles.post__quoteAuthor}>{quoteAuthor}</cite>
          )}
        </div>
      </div>
    </blockquote>
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

export { PostText, PostQuote };
export default PostContent;
