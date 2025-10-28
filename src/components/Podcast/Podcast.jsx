import { useApi } from '../../hooks/useApi';
import LinkTo from '../LinkTo/LinkTo';
import PodcastCard from '../PodcastCard/PodcastCard';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './podcast.module.css';
// Import podcast cover images
import cover1 from '@img/podcast-covers/cover1.png';
import cover2 from '@img/podcast-covers/cover2.png';
import cover3 from '@img/podcast-covers/cover3.png';
import cover4 from '@img/podcast-covers/cover4.png';
import cover5 from '@img/podcast-covers/cover5.png';

const Podcasts = () => {
	const { data: podcasts, loading, error } = useApi('podcasts');

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!podcasts) return <div>No podcasts found</div>;

	// Map cover names to actual image paths
	const getCoverImage = (coverName) => {
		const coverMap = {
			cover1,
			cover2,
			cover3,
			cover4,
			cover5,
		};
		return coverMap[coverName] || cover3;
	};

	return (
		<section className={styles.podcasts}>
			<div className={styles.podcasts__header}>
				<SectionTitle title="Podcast" />
				<LinkTo
					title="all epizodes"
					link="/podcasts"
					direction="right"
				/>
			</div>

			<div className={styles.grid}>
				{[...podcasts]
					.reverse()
					.slice(0, 4)
					.map((podcast) => (
						<PodcastCard
							key={podcast.id}
							cover={getCoverImage(podcast.cover)}
							author={podcast.author}
							number={podcast.number}
							title={podcast.title}
							date={podcast.date}
							duration={podcast.duration}
						/>
					))}
			</div>
		</section>
	);
};

export default Podcasts;
