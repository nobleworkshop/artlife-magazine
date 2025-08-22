import styles from "./../post.module.css";

const PostHeader = ({ title, desc }) => {
	return (
		<div className={styles.post__header}>
			<h2 className={styles.post__title}>{title}</h2>
			<p className={styles.post__desc}>{desc}</p>
		</div>
	);
};

export default PostHeader;
