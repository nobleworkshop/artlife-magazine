import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./pages/main";
import Magazine from "./pages/magazine";
import MagazinePost from "./pages/magazinePost";
import UiKit from "./pages/uikit";
import UiKitWidgets from "./pages/uikit-widgets";
import UiKitSections from "./pages/uikit-sections";
import Podcast from "./pages/podcast";
import PodcastPostPage from "./pages/podcast-post";
import AuthorProfilePage from "./pages/author-profile";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/app.css";

function Link({ to, title }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? "nav__link nav__link--active" : "nav__link"
			}
		>
			{title}
		</NavLink>
	);
}

function App() {
	return (
		<>
			<BrowserRouter>
				<nav className="nav">
					<Link to="/" title="Main" />
					<Link to="/magazine" title="Magazine" />
					<Link to="/magazinePost" title="Post" />
					<Link to="/author-profile" title="Author" />
					<Link to="/podcast" title="Podcast" />
					<Link to="/podcast-post" title="Podcast Post" />
					<Link to="/author-profile" title="Author Profile" />
				</nav>
				<nav className="nav nav--ui">
					<Link to="/uikit" title="UI Elements" />
					<Link to="/uikit-widgets" title="Widgets" />
					<Link to="/uikit-sections" title="Sections" />
				</nav>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/magazine" element={<Magazine />} />
					<Route path="/magazinePost" element={<MagazinePost />} />
					<Route path="/podcast" element={<Podcast />} />
					<Route path="/podcast-post" element={<PodcastPostPage />} />
					<Route path="/uikit" element={<UiKit />} />
					<Route path="/uikit-widgets" element={<UiKitWidgets />} />
					<Route path="/uikit-sections" element={<UiKitSections />} />
					<Route
						path="/author-profile"
						element={<AuthorProfilePage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
