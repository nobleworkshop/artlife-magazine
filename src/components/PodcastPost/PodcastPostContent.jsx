import PodcastQuote from "./PodcastQuote";
import styles from "./podcastPostContent.module.css";

const PodcastPostContent = () => {
	return (
		<div className={styles.content}>
			<div className={styles.header}>
				<div className={styles.episodeInfo}>
					<span className={styles.episodeNumber}>Episode 01</span>
					<h1 className={styles.title}>
						Save the world from ourselves!
					</h1>
				</div>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare
					arcu dui vivamus arcu felis bibendum ut. Porttitor leo a
					diam.
				</p>
			</div>

			<div className={styles.textContent}>
				<p className={styles.paragraph}>
					Porttitor rhoncus dolor purus non enim praesent elementum.
					Eget dolor morbi non arcu risus quis varius. Posuere ac ut
					consequat semper viverra nam libero. In ornare quam viverra
					orci sagittis eu. Tristique risus nec feugiat in fermentum
					posuere urna nec. Tempus quam pellentesque nec nam aliquam
					sem et. Convallis a cras semper auctor neque vitae tempus
					quam pellentesque. Sollicitudin ac orci phasellus egestas
					tellus rutrum tellus pellentesque. Sed egestas egestas
					fringilla phasellus faucibus scelerisque eleifend donec
					pretium. Sit amet porttitor eget dolor morbi non arcu risus.
					Justo eget magna fermentum iaculis eu non diam phasellus.
					Sit amet luctus venenatis lectus magna fringilla. Neque
					vitae tempus quam pellentesque nec nam. Tellus orci ac
					auctor augue mauris augue neque gravida. Tempus imperdiet
					nulla malesuada pellentesque elit eget gravida cum sociis.
					Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis
					convallis convallis tellus id interdum velit laoreet id.
					Vulputate mi sit amet mauris commodo quis. Semper viverra
					nam libero justo laoreet sit amet. Eget nullam non nisi est
					sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac
					felis donec et odio pellentesque diam volutpat. Quis varius
					quam quisque id diam vel quam elementum. Felis bibendum ut
					tristique et egestas quis ipsum suspendisse ultrices. Id
					diam vel quam elementum pulvinar etiam non. Non consectetur
					a erat nam at lectus urna duis convallis.
				</p>

				<PodcastQuote />

				<p className={styles.paragraph}>
					Porttitor rhoncus dolor purus non enim praesent elementum.
					Eget dolor morbi non arcu risus quis varius. Posuere ac ut
					consequat semper viverra nam libero. In ornare quam viverra
					orci sagittis eu. Tristique risus nec feugiat in fermentum
					posuere urna nec. Tempus quam pellentesque nec nam aliquam
					sem et. Convallis a cras semper auctor neque vitae tempus
					quam pellentesque. Sollicitudin ac orci phasellus egestas
					tellus rutrum tellus pellentesque. Sed egestas egestas
					fringilla phasellus faucibus scelerisque eleifend donec
					pretium. Sit amet porttitor eget dolor morbi non arcu risus.
					Justo eget magna fermentum iaculis eu non diam phasellus.
					Sit amet luctus venenatis lectus magna fringilla. Neque
					vitae tempus quam pellentesque nec nam. Tellus orci ac
					auctor augue mauris augue neque gravida. Tempus imperdiet
					nulla malesuada pellentesque elit eget gravida cum sociis.
					Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis
					convallis convallis tellus id interdum velit laoreet id.
					Vulputate mi sit amet mauris commodo quis. Semper viverra
					nam libero justo laoreet sit amet. Eget nullam non nisi est
					sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac
					felis donec et odio pellentesque diam volutpat. Quis varius
					quam quisque id diam vel quam elementum. Felis bibendum ut
					tristique et egestas quis ipsum suspendisse ultrices. Id
					diam vel quam elementum pulvinar etiam non. Non consectetur
					a erat nam at lectus urna duis convallis.
				</p>
			</div>
		</div>
	);
};

export default PodcastPostContent;
