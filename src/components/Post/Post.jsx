import PostContent, {
	PostText,
} from '@components/Post/postComponents/PostContent';
import PostHeader from '@components/Post/postComponents/PostHeader';

const Post = ({ data }) => {
	if (!data) return <p>Article not found</p>;

	return (
		<article>
			<PostHeader data={data} />

			<PostContent data={data}>
				<PostText text={data.text} />
			</PostContent>
		</article>
	);
};

export default Post;
