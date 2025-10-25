import Article from '../../components/Article/Article';
import LinkTo from '../../components/LinkTo/LinkTo';

import styles from './articlesSection.module.css';
import ArticleImg from '@img/diogo.png';

const ArticlesSection = () => {
	return (
		<div className={styles.wraper}>
			<div className={styles.list}>
				{Array.from({ length: 6 }).map((_, index) => (
					<Article
						key={index}
						img={ArticleImg}
						title="Hope lights the way"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
						autor="Jakob Gronberg"
						date="2022-03-16"
						timeToRead="1"
						badgeName="ART"
						badgeLink="/art"
					/>
				))}
			</div>
			<div className={styles.more}>
				<LinkTo
					title="all articles"
					link="/articles"
					direction="right"
				/>
			</div>
		</div>
	);
};

export default ArticlesSection;
