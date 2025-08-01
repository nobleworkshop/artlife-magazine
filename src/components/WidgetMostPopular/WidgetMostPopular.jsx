import style from "./widgetMostPopular.module.css";
import MostPopular from "../MostPopular/MostPopular"
import Widget from "../Widget/Widget";

const WidgetMostPopular = () => {
	return (
		<Widget title="Most Popular">
			<MostPopular
				num="01"
				title="Street art festival"
				autor="Cristofer Vaccaro"
			/>
			<MostPopular num="02" title="Hope dies last" autor="Anne Henry" />
			<MostPopular
				num="03"
				title="Artists who want to rise above"
				autor="Anna Nielsen"
			/>
		</Widget>
	);
};

export default WidgetMostPopular;