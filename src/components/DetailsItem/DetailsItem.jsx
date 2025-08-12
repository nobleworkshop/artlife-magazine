import styles from './detailsItem.module.css';

const DetailsItem = ({ title, value }) => {
	const renderValue = () => {
		if (title === "Duration") {
			if (value < 60) {
				return `${value} Min`;
			} else {
				let hours = (value / 60).toFixed(0);
				let minutes = value % 60;
				return `${hours}h ${minutes} Min`;
			}
		}

		if (title === "Date") {
			const date = new Date(value);
			const day = date.getDate();
			const month = date.toLocaleString("en-US", { month: "long" });
			const year = date.getFullYear();
			return `${day}, ${month} ${year}`;
		}

		if (title === "DateShort") {
			const date = new Date(value);
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
			return `${day}.${month}.${year}`;
		}

		return value;
	};

	return (
		<div className={styles["details-item"]}>
			<div className={styles["details-item__content"]}>
				<div className={styles["details-item__title"]}>
					{title === 'DateShort' ? 'Date' : title}
				</div>
				<div className={styles["details-item__value"]}>{renderValue()}</div>
			</div>
		</div>
	);
};

export default DetailsItem;
