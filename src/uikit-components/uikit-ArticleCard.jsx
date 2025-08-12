import ArticleCard from "../components/ArticleCard/ArticleCard";
import styles from "./uikit.module.css";
import ArticleCardImg from "../img/article-images/1.png";

const UiKitArticleCard = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Article Card</h3>

			<div className={styles.component__preview}>
				<ArticleCard
					img={ArticleCardImg}
					title="Hope dies last"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
					author="Jakob Grønberg"
					date="2023-10-01"
					timeToRead="1"
					badgeName="art"
					badgeLink="/badge/art"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import ArticleCard from "../components/ArticleCard/ArticleCard";`}
						<br />
						{`import img1 from "../img/article-images/1.png";`}
						<br />
						<br />
						{`<ArticleCard`}
						<br />
						{`  img={img1}`}
						<br />
						{`  title="Hope dies last"`}
						<br />
						{`  text="Lorem ipsum dolor sit amet..."`}
						<br />
						{`  author="Jakob Grønberg"`}
						<br />
						{`  date="2023-10-01"`}
						<br />
						{`  timeToRead="1"`}
						<br />
						{`  badgeName="art"`}
						<br />
						{`  badgeLink="/badge/art"`}
						<br />
						{`/>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitArticleCard;
