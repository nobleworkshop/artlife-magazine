import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./pages/main";
import Magazine from "./pages/magazine";
import UiKit from "./pages/uikit";
import UiKitWidgets from "./pages/uikit-widgets";
import UiKitSections from "./pages/uikit-sections";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/app.css";

function App() {

	return (
		<>
			<BrowserRouter>
				<nav className="nav">
					<NavLink to="/" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>Main</NavLink>
					<NavLink to="/magazine" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>Magazine</NavLink>
					<NavLink to="/uikit" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>UiKit</NavLink>
					<NavLink to="/uikit-widgets" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>UiKit Widgets</NavLink>
					<NavLink to="/uikit-sections" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>UiKit Sections</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/magazine" element={<Magazine />} />
					<Route path="/uikit" element={<UiKit />} />
					<Route path="/uikit-widgets" element={<UiKitWidgets />} />
					<Route path="/uikit-sections" element={<UiKitSections />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
