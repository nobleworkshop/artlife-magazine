/**
 * @Component Logo
 * @import import Logo from "../components/Logo/Logo"
 * @useLink <Logo alter="Название сайта" link="/" />
 * @useUnLink <Logo alter="Badge" />
 * @param alter = "наименование свойства alt"
 * @param link = передается если логотип используется как ссылка
 */



import Img from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Logo = ({ alter, link }) => {
    return (
        <>
            {link && (
                <Link to={link}><img src={Img} alt={alter} /></Link>
            )}
            {!link && (
                <img src={Img} alt={alter} />
            )}
        </>
    )
}
export default Logo