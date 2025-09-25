import LeadArticle from '../components/LeadArticle/LeadArticle';

import styles from './uikit.module.css';
import img from '../img/leadArticle-img.png';

const UiKitButton = () => {
	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Lead article</h3>

			<div className={styles.component__preview}>
				<LeadArticle
					title="Don’t close your eyes"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
					img={<img src={img} alt="Lead Article img" />}
					author="Jacob Gronberg"
					date="2022-03-16"
					timeToRead="1"
					badge="Label"
					badgeLink="/"
				/>
			</div>

			<div className={styles.component__code}>
				<pre>
					<code>
						{`import LeadArticle from "../components/LeadArticle/LeadArticle";

<LeadArticle
	title="Don’t close your eyes"
	text="Lorem ipsum…"
	img={<img src={img} alt="Lead Article img" />}
	author="Jacob Gronberg"
	date="2022-03-16"
	timeToRead="1"
	badge="Label"
	badgeLink="/"
/>`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitButton;
