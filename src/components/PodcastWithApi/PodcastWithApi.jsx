import { usePodcasts } from '../../hooks/useApiWithImages';
import LinkTo from '../LinkTo/LinkTo';
import PodcastCard from '../PodcastCard/PodcastCard';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './podcast.module.css';

const Podcast = () => {
	const { data: podcasts, loading, error } = usePodcasts();

	if (loading) return <div>Loading podcasts...</div>;
	if (error) return <div>Error loading podcasts: {error}</div>;
	if (!podcasts || podcasts.length === 0) return <div>No podcasts found</div>;

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
							cover={podcast.coverImage}
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

export default Podcast;
