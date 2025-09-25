import Badge from '../Badge/Badge';
import DetailsItem from '../DetailsItem/DetailsItem';

import styles from './article.module.css';

const Article = ({
	img,
	title,
	text,
	autor,
	date,
	timeToRead,
	badgeName,
	badgeLink,
}) => {
	return (
		<article className={styles.article}>
			<div className={styles.image}>
				<img src={img} alt="image" />
			</div>

			<div className={styles.content}>
				<div className={styles.textBlock}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.text}>{text}</p>
				</div>

				<div className={styles.footer}>
					<div className={styles.info}>
						<DetailsItem title="Text" value={autor} />
						<DetailsItem title="Date" value={date} />
						<DetailsItem title="Duration" value={timeToRead} />
					</div>

					<div className="badge">
						<Badge title={badgeName} link={badgeLink} />
					</div>
				</div>
			</div>
		</article>
	);
};

export default Article;
