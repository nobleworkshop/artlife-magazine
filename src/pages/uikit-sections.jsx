import UiKitArticle from '@uikit/uikit-Article';
import UiKitArticleCard from '@uikit/uikit-ArticleCard';
import UiKitArticleCards from '@uikit/uikit-ArticleCards';
import UiKitAuthorCard from '@uikit/uikit-AuthorCard';
import UiKitAuthors from '@uikit/uikit-Authors';
import UiKitCategoriesNavbar from '@uikit/uikit-CategoriesNavbar';
import UiKitFooter from '@uikit/uikit-Footer';
import UiKitHeader from '@uikit/uikit-Header';
import UiKitLatestPosts from '@uikit/uikit-LatestPosts';
import UiKitLeadArticle from '@uikit/uikit-LeadArticle';
import UiKitPodcast from '@uikit/uikit-Podcast';
import UiKitPodcastCard from '@uikit/uikit-PodcastCard';
import UiKitPodcastPost from '@uikit/uikit-PodcastPost';
import UiKitPost from '@uikit/uikit-Post';
import UiKitReturnNavigation from '@uikit/uikit-ReturnNavigation';

import UiKitAuthorsList from '../uikit-components/uikit-AuthorsList';
import UiKitAuthorsListItem from '../uikit-components/uikit-AuthorsListItem';

import styles from './uikit.module.css';

const UiKitSections = () => {
	return (
		<div className="container">
			<h1 className={styles.uikit__title}>UiKit</h1>
			<div className={styles.uikit__wrapper}>
				<h2 className={styles.uikit__subtitle}>Sections</h2>
				<UiKitHeader />
				<UiKitLeadArticle />
				<UiKitArticle />
				<UiKitAuthorCard />
				<UiKitAuthors />
				<UiKitPodcastCard />
				<UiKitCategoriesNavbar />
				<UiKitPodcast />
				<UiKitArticleCard />
				<UiKitArticleCards />
				<UiKitLatestPosts />
				<UiKitFooter />
				<UiKitPost />
				<UiKitPodcastPost />
				<UiKitReturnNavigation />
				<UiKitAuthorsListItem />
				<UiKitAuthorsList />
			</div>
		</div>
	);
};

export default UiKitSections;
