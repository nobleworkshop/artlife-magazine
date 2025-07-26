/**
 * @Component NavLink
 * @import import NavLink from "../components/NavLink/NavLink"
 * @useLink <NavLink title="блог" router="/blog" />
 * @param title = "наименование"
 * @param router = передается если логотип используется как ссылка
 */


import s from "./NavLink.module.css";


const NavLink = ({ title, router }) => {
    return (
        <>

            <a className={s.navLink} href={router}>{title}</a>

        </>
    )
}
export default NavLink