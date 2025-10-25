import ArticlesSection from '@components/ArticlesSection/ArticlesSection';
import AuthorsWithApi from '@components/AuthorsWithApi/AuthorsWithApi';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import LeadArticle from '@components/LeadArticle/LeadArticle';
import PodcastWithApi from '@components/PodcastWithApi/PodcastWithApi';
import RunningLine from '@components/RunningLine/RunningLine';
import WidgetMostPopular from '@components/WidgetMostPopular/WidgetMostPopular';
import WidgetNewsletter from '@components/WidgetNewsletter/WidgetNewsletter';
import WidgetPrintmagazine from '@components/WidgetPrintmagazine/WidgetPrintmagazine';

import styles from './mainWithApi.module.css';

const MainWithApi = () => {
	return (
		<>
			<div className={`${styles.main} container`}>
				<div className={styles['main-header']}>
					<Header title="art&life" />
				</div>

				<div className={styles['main-running-line']}>
					<RunningLine />
				</div>

				<div className={styles['main-lead-article']}>
					<LeadArticle
						title="Don't close your eyes"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
						author="Jacob Gronberg"
						date="2022-03-16"
						timeToRead="1"
						badge="Label"
						badgeLink="/"
					/>
				</div>

				<div className={styles['two-columns']}>
					<div className={styles['main-content']}>
						<ArticlesSection />
					</div>
					<div className={styles['main-widgets']}>
						<WidgetPrintmagazine />
						<WidgetMostPopular />
						<WidgetNewsletter />
					</div>
				</div>

				<div className={styles['main-podcast']}>
					<PodcastWithApi />
				</div>

				<div className={styles['main-authors']}>
					<AuthorsWithApi />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default MainWithApi;
