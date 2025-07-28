import styles from './detailsItem.module.css';

const DetailsItem = ({ title, volume }) => {
	const renderVolume = () => {
		if (title === "Duration") {
			return `${volume} Min`;
		}

		if (title === "Date") {
			const date = new Date(volume);
			const day = date.getDate();
			const month = date.toLocaleString("en-US", { month: "long" });
			const year = date.getFullYear();
			return `${day}, ${month} ${year}`;
		}
		return volume;
	};
	return (
		<div className={styles["details-item"]}>
			<div className={styles["details-item__content"]}>
				<div className={styles["details-item__title"]}>{title}</div>
				<div className={styles["details-item__volume"]}>{renderVolume()}</div>
			</div>
		</div>
	);
};

export default DetailsItem;
