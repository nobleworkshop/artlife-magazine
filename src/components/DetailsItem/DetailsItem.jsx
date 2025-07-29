import styles from './detailsItem.module.css';

const DetailsItem = ({ title, value }) => {
	const renderValue = () => {
		if (title === "Duration") {
			return `${value} Min`;
		}

		if (title === "Date") {
			const date = new Date(value);
			const day = date.getDate();
			const month = date.toLocaleString("en-US", { month: "long" });
			const year = date.getFullYear();
			return `${day}, ${month} ${year}`;
		}
		return value;
	};
	return (
		<div className={styles["details-item"]}>
			<div className={styles["details-item__content"]}>
				<div className={styles["details-item__title"]}>{title}</div>
				<div className={styles["details-item__value"]}>{renderValue()}</div>
			</div>
		</div>
	);
};

export default DetailsItem;
