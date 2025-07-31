import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import UiKit from "./pages/uikit";
import Art from "./pages/art";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/app.css";

function App() {

	return (
		<>
			<BrowserRouter>
				<nav>
					<Link to="/">Main</Link>
					<Link to="/uikit">UiKit</Link>
					<Link to="/art">Art</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/uikit" element={<UiKit />} />
					<Route path="/art" element={<Art />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
