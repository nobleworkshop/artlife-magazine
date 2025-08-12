import PodcastCard from '../PodcastCard/PodcastCard';
import styles from './podcast.module.css';
import LinkTo from "../LinkTo/LinkTo";
import SectionTitle from "../SectionTitle/SectionTitle";

import cover3 from '../../img/podcast-covers/cover3.png';
import cover4 from '../../img/podcast-covers/cover4.png';
import cover5 from '../../img/podcast-covers/cover5.png';

const Podcasts = () => {
	const podcasts = [
		{
			id: 3,
			cover: cover3,
			author: 'Fyrre',
			number: '03',
			title: 'Behind the scenes of the street art culture',
			date: '2022-03-16',
			duration: '45'
		},
		{
			id: 4,
			cover: cover4,
			author: 'Fyrre',
			number: '04',
			title: 'The hidden messages of Jack Nielson',
			date: '2022-03-16',
			duration: '60'
		},
		{
			id: 5,
			cover: cover5,
			author: 'Fyrre',
			number: '05',
			title: 'The Problem of today’s cultural development',
			date: '2022-03-16',
			duration: '80'
		},
	];

	return (
		<section className={styles.podcasts}>
			<div className={styles.podcasts__header}>
				<SectionTitle title="Podcast" />
				<LinkTo title="all epizodes" link="/podcasts" direction="right" />
			</div>

			<div className={styles.grid}>
				{[...podcasts].reverse().map((podcast) => (
					<PodcastCard
						key={podcast.id}
						cover={podcast.cover}
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
