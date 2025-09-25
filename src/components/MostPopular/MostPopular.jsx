import style from './mostpopular.module.css';

const MostPopular = ({ num, title, autor }) => {
	return (
		<>
			<div className={style.block}>
				<div className={style.num}>{num}</div>
				<div className={style.title}>{title}</div>
				<div></div>
				<div className={style.text}>
					<span>Text</span>
					{autor}
				</div>
			</div>
		</>
	);
};

export default MostPopular;
