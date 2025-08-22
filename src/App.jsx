import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./pages/main";
import Magazine from "./pages/magazine";
import UiKit from "./pages/uikit";
import UiKitWidgets from "./pages/uikit-widgets";
import UiKitSections from "./pages/uikit-sections";
import Podcast from "./pages/podcast";

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
					<Link to="/podcast" title="Podcast" />
					<Link to="/uikit" title="UiKit" />
					<Link to="/uikit-widgets" title="UiKit Widgets" />
					<Link to="/uikit-sections" title="UiKit Sections" />
				</nav>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/magazine" element={<Magazine />} />
					<Route path="/podcast" element={<Podcast />} />
					<Route path="/uikit" element={<UiKit />} />
					<Route path="/uikit-widgets" element={<UiKitWidgets />} />
					<Route path="/uikit-sections" element={<UiKitSections />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
