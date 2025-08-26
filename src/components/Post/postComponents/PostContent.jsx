import styles from "./../post.module.css";
import DetailsItem from "@components/DetailsItem/DetailsItem";
import Socials from "@components/Socials/Socials";

// Компонент текста с автоматическим жирным первым параграфом
const PostText = ({ text }) => {
	const paragraphs = text.split("\n\n");
	return (
		<>
			{paragraphs.map((p, index) => (
				<p
					key={index}
					className={
						index === 0 ? styles.post__textBold : styles.post__text
					}
				>
					{p}
				</p>
			))}
		</>
	);
};

// Компонент цитаты
const PostQuote = ({ quoteText, quoteAuthor }) => {
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

PostQuote.defaultProps = {
	quoteText: "",
	quoteAuthor: null,
};

const PostContent = ({
	img,
	photo,
	name,
	textBeforeQuote,
	quoteText,
	quoteAuthor,
	textAfterQuote,
}) => {
	return (
		<div className={styles.postContent}>
			<div className={styles.post__img}>
				<img src={img} alt="Post image" />
			</div>
			<div className={styles.post__wrapper}>
				<aside className={styles.post__author}>
					<div className={styles.post__authorInfo}>
						<img
							src={photo}
							alt="Author photo"
							className={styles.photo}
						/>
						<h3 className={styles.name}>{name}</h3>
					</div>
					<hr className={styles.divider} />
					<div className={styles.post__detailsItems}>
						<DetailsItem title="Date" value="16. March 2022" />
						<DetailsItem title="Read" value="2 Min" />
						<DetailsItem title="Share" />
					</div>
				</aside>
				<div className={styles.post__main}>
					<PostText text={textBeforeQuote} />
					<PostQuote quoteText={quoteText} quoteAuthor={quoteAuthor} />
					<PostText text={textAfterQuote} />
				</div>
			</div>
		</div>
	);
};

export default PostContent;
