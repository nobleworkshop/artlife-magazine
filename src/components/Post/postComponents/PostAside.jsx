import DetailsItem from '@components/DetailsItem/DetailsItem';

import styles from './../post.module.css';

const PostAside = ({ data }) => {
	return (
		<aside className={styles.post__author}>
			<div className={styles.post__authorInfo}>
				{data.authorPhoto && (
					<img
						src={data.authorPhoto}
						alt={data.authorName}
						className={styles.photo}
					/>
				)}
				<h3 className={styles.name}>{data.authorName}</h3>
			</div>

			<hr className={styles.divider} />

			<div className={styles.post__detailsItems}>
				<DetailsItem title="Date" value={data.date} />
				<DetailsItem title="Read" value={data.timeToRead} />
				<DetailsItem title="Share" />
			</div>
		</aside>
	);
};

export default PostAside;
