import { useEffect, useState } from "react";
import AuthorsList from "../components/AuthorsList/AuthorsList";
import styles from "./uikit.module.css";

const UiKitAuthorsList = () => {
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		fetch("/db.json")
			.then((res) => res.json())
			.then((data) => setAuthors(data.authors))
			.catch((err) => console.error("Ошибка загрузки authors:", err));
	}, []);

	return (
		<div className={styles.component}>
			<h3 className={styles.component__title}>Authors List</h3>

			{/* Превью с реальным списком авторов */}
			<div className={styles.component__preview}>
				<AuthorsList authors={authors} />
			</div>

			{/* Код для копирования */}
			<div className={styles.component__code}>
				<pre>
					<code>
{`import { useEffect, useState } from "react";
import AuthorsList from "../components/AuthorsList/AuthorsList";

const UiKitAuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);

  return <AuthorsList authors={authors} />;
};`}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default UiKitAuthorsList;
