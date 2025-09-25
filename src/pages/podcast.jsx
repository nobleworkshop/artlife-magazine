import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import PodcastListItem from '@components/PodcastListItem/PodcastListItem';

import styles from './podcast.module.css';
import img01 from '@img/podcast-covers/small/01.jpg';
import img02 from '@img/podcast-covers/small/02.jpg';
import img03 from '@img/podcast-covers/small/03.jpg';
import img04 from '@img/podcast-covers/small/04.jpg';
import img05 from '@img/podcast-covers/small/05.jpg';

const Podcast = () => {
	const podcastList = [
		{
			number: '01',
			image: img01,
			title: '10 artists your should definitely know',
			date: '2022-03-16',
			duration: '80',
		},
		{
			number: '02',
			image: img02,
			title: 'The art of movement',
			date: '2022-03-16',
			duration: '80',
		},
		{
			number: '03',
			image: img03,
			title: 'Behind the scenes of the street art culture',
			date: '2022-03-16',
			duration: '80',
		},
		{
			number: '04',
			image: img04,
			title: 'The hidden messages of Jack Nielson',
			date: '2022-03-16',
			duration: '80',
		},
		{
			number: '05',
			image: img05,
			title: 'The Problem of today’s cultural development',
			date: '2022-03-16',
			duration: '80',
		},
	];

	return (
		<>
			<div className={`${styles.main} container`}>
				<div className={styles['podcast__header']}>
					<Header title="podcast" />
				</div>
				<div className={styles['podcast__list']}>
					{podcastList.reverse().map((item) => (
						<PodcastListItem
							key={item.number}
							number={item.number}
							image={item.image}
							title={item.title}
							date={item.date}
							duration={item.duration}
						/>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Podcast;
