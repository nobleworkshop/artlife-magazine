/**
 * @Component NavLink
 * @import import NavLink from "../components/NavLink/NavLink"
 * @useLink <NavLink title="блог" to="/blog" />
 * @param title = "наименование"
 * @param to = передается если логотип используется как ссылка
 */
import { NavLink } from 'react-router-dom';

import styles from './Link.module.css';

const Link = ({ title, link }) => {
	return (
		// Using render props
		<NavLink
			to={link}
			className={({ isActive }) =>
				isActive ? styles.NavLink__active : styles.NavLink__pending
			}
		>
			{title}
		</NavLink>
	);
};
export default Link;
