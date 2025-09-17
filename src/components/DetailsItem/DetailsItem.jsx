import styles from './detailsItem.module.css';
import Socials from "@components/Socials/Socials";

const DetailsItem = ({ title, value }) => {
	const renderValue = () => {
		if (title === "Duration") {
			// если value уже строка, просто вернуть её
			if (typeof value === "string") return value;

			// если число — красиво форматируем
			if (typeof value === "number") {
				if (value < 60) return `${value} Min`;
				const hours = Math.floor(value / 60);
				const minutes = value % 60;
				return minutes > 0 ? `${hours}h ${minutes} Min` : `${hours}h`;
			}
		}

		if (title === "Date") {
			// пробуем использовать строку напрямую, если не число
			const date = new Date(value);
			if (!isNaN(date)) {
				const day = String(date.getDate()).padStart(2, "0");
				const month = date.toLocaleString("en-US", { month: "long" });
				const year = date.getFullYear();
				return `${day}. ${month} ${year}`;
			} else {
				// если Date не парсится, просто возвращаем строку
				return value;
			}
		}

		if (title === "DateShort") {
			const date = new Date(value);
			if (!isNaN(date)) {
				const day = String(date.getDate()).padStart(2, "0");
				const month = String(date.getMonth() + 1).padStart(2, "0");
				const year = date.getFullYear();
				return `${day}.${month}.${year}`;
			} else {
				return value;
			}
		}

		if (title === "Share") {
			return <Socials showRss={false} />;
		}

		return value; // для Text или других
	};

	return (
		<div className={styles["details-item"]}>
			<div className={styles["details-item__content"]}>
				{title && (
					<div className={styles["details-item__title"]}>
						{title === 'DateShort' ? 'Date' : title}
					</div>
				)}
				<div className={styles["details-item__value"]}>{renderValue()}</div>
			</div>
		</div>
	);
};

export default DetailsItem;
