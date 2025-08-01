import style from "./widgetNewsletter.module.css";
import Button from "../Button/Button";
import Widget from "../Widget/Widget";
import Input from '../Input/Input'

const WidgetNewsletter = () => {
	return (
		<Widget title="Newsletter" boxed={true}>
			<div className={style.tagline}>Design News to your inbox</div>
			<div className={style.input_wrapper}>
				<Input type="email" placeholder="Email" />
			</div>
			<div className={style['btn-wrapper']}>
				<Button
					title="Sign up"
					onclick={() => {
						console.log("Click!");
					}}
				/>
			</div>
		</Widget>
	);
};

export default WidgetNewsletter;
