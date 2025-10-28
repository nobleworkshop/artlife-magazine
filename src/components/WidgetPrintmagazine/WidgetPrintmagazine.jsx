import Button from '../Button/Button';
import Widget from '../Widget/Widget';

import style from './widgetPrintmagazine.module.css';
import img from '@img/magazin-cover.png';

const WidgetPrintmagazine = () => {
	return (
		<Widget title="Printmagazine">
			<div className={style.date}>03/2022</div>
			<div className={style.image}>
				<img src={img} alt="image" />
			</div>
			<Button title="Button" onclick={() => {}} />
		</Widget>
	);
};

export default WidgetPrintmagazine;
