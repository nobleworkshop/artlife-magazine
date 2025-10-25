/**
 * @Component Logo
 * @import import Logo from "../components/Logo/Logo"
 * @useLink <Logo alt="Название сайта" link="/" />
 * @useUnLink <Logo alt="Badge" />
 * @param alt = "наименование свойства alt"
 * @param link = передается если логотип используется как ссылка
 */

import { Link } from 'react-router-dom';

import Img from '@img/logo.svg';

const Logo = ({ alt, link }) => {
	return (
		<>
			{link && (
				<Link to={link}>
					<img src={Img} alt={alt} />
				</Link>
			)}
			{!link && <img src={Img} alt={alt} />}
		</>
	);
};
export default Logo;
