import style from "./widget.module.css";

const Widget = ({title, children, boxed = false}) => {
	return (
		<aside className={style.widget + " " + (boxed ? style.boxed : "")}>
			{title && <h3 className={style.title}>{title}</h3>}
			<div className={style.content}>{children}</div>
		</aside>
	);
};

export default Widget;
