/**
 * @Component NavLink
 * @import import NavLink from "../components/NavLink/NavLink"
 * @useLink <NavLink title="блог" to="/blog" />
 * @param title = "наименование"
 * @param to = передается если логотип используется как ссылка
 */
import { NavLink } from "react-router-dom";

import styles from "./Link.module.css";


const Link = ({ title, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
            {title}
        </NavLink>
    )
}
export default Link