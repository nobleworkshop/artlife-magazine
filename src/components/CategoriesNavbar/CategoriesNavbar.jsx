import { useEffect, useState } from 'react';

import { useApi } from '../../hooks/useApi';

import styles from './categoriesNavbar.module.css';

const CategoriesNavbar = ({ selectedCategories, onCategoryChange }) => {
	const { data: articles, loading } = useApi('articles');
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (articles && Array.isArray(articles)) {
			// Получаем все уникальные категории из статей
			const uniqueCategories = [
				...new Set(
					articles
						.map((article) => article.badgeName)
						.filter((category) => category)
						.map((category) => category.toLowerCase()),
				),
			].sort();

			setCategories(uniqueCategories);
		}
	}, [articles]);

	const handleCategoryToggle = (category) => {
		if (onCategoryChange) {
			const newSelected = selectedCategories.includes(category)
				? selectedCategories.filter((c) => c !== category)
				: [...selectedCategories, category];
			onCategoryChange(newSelected);
		}
	};

	const handleAllToggle = () => {
		if (onCategoryChange) {
			// Если все выбраны или ничего не выбрано - снимаем все
			if (
				selectedCategories.length === categories.length ||
				selectedCategories.length === 0
			) {
				onCategoryChange([]);
			} else {
				// Иначе выбираем все
				onCategoryChange([...categories]);
			}
		}
	};

	if (loading) return null;

	// "All" выбран, если ничего не выбрано или выбраны все категории
	const isAllSelected =
		selectedCategories.length === 0 ||
		(categories.length > 0 &&
			selectedCategories.length === categories.length);

	return (
		<section className={styles['categories-navbar']}>
			<h2 className={styles['categories-navbar__title']}>Categories</h2>
			<nav className={styles.navbar}>
				<label className={styles['category-checkbox']}>
					<input
						type="checkbox"
						checked={isAllSelected}
						onChange={handleAllToggle}
						className={styles['category-checkbox__input']}
					/>
					<span className={styles['category-checkbox__label']}>
						all
					</span>
				</label>
				{categories.map((category) => {
					const isChecked = selectedCategories.includes(category);
					return (
						<label
							key={category}
							className={styles['category-checkbox']}
						>
							<input
								type="checkbox"
								checked={isChecked}
								onChange={() => handleCategoryToggle(category)}
								className={styles['category-checkbox__input']}
							/>
							<span
								className={styles['category-checkbox__label']}
							>
								{category}
							</span>
						</label>
					);
				})}
			</nav>
		</section>
	);
};

export default CategoriesNavbar;
