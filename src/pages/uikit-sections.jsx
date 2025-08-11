import UiKitHeader from "../uikit-components/uikit-Header";
import UiKitLeadArticle from "../uikit-components/uikit-LeadArticle";
import UiKitArticle from "./../uikit-components/uikit-Article";
import UiKitAuthorCard from "../uikit-components/uikit-AuthorCard";
import UiKitArticleCard from "../uikit-components/uikit-ArticleCard";

import UiKitAuthors from "../uikit-components/uikit-Authors";
import UiKitPodcastCard from "../uikit-components/uikit-PodcastCard";

const UiKitSections = () => {
	return (
		<div className="container">
			<h1
				style={{
					fontSize: "32px",
					fontWeight: 300,
					marginBottom: "20px",
				}}
			>
				UiKit
			</h1>
			<div
				className="components"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<h2>Sections</h2>

				<UiKitHeader />
				<UiKitLeadArticle />
				<UiKitArticle />
				<UiKitAuthorCard />
				<UiKitAuthors />
				<UiKitPodcastCard />
				<UiKitArticleCard />
			</div>
		</div>
	);
};

export default UiKitSections;
