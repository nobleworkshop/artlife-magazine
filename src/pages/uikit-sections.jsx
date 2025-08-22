
import UiKitHeader from "@uikit/uikit-Header";
import UiKitLeadArticle from "@uikit/uikit-LeadArticle";
import UiKitArticle from "@uikit/uikit-Article";
import UiKitAuthorCard from "@uikit/uikit-AuthorCard";
import UiKitFooter from "@uikit/uikit-Footer";
import UiKitAuthors from "@uikit/uikit-Authors";
import UiKitPodcastCard from "@uikit/uikit-PodcastCard";
import UiKitCategoriesNavbar from "@uikit/uikit-CategoriesNavbar";
import UiKitPodcast from "@uikit/uikit-Podcast";
import UiKitArticleCard from "@uikit/uikit-ArticleCard";
import UiKitArticleCards from "@uikit/uikit-ArticleCards";
import styles from "./uikit.module.css";
import UiKitLatestPosts from "@uikit/uikit-LatestPosts";
import UiKitPost from "../uikit-components/uikit-Post";

const UiKitSections = () => {
	return (
		<div className="container">
			<h1 className={styles.uikit__title}>
				UiKit
			</h1>
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
			</div>
		</div>
	);
};

export default UiKitSections;
