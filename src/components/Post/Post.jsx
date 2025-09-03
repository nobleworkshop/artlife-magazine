import PostContent, { PostText, PostQuote } from "@components/Post/postComponents/PostContent";
import PostHeader from "@components/Post/postComponents/PostHeader";

const Post = ({ data }) => {
  if (!data) return <p>Article not found</p>;

  const paragraphs = data.text.split("\n\n");
  const beforeQuote = paragraphs.slice(0, 2);
  const afterQuote = paragraphs.slice(2);

  return (
    <article>
      <PostHeader data={data} />

      <PostContent data={data}>
        <PostText textArray={beforeQuote} boldFirst />

        {data.quoteText && (
          <PostQuote
            quoteText={data.quoteText}
            quoteAuthor={data.quoteAuthor}
          />
        )}

        <PostText textArray={afterQuote} boldFirst />
      </PostContent>
    </article>
  );
};

export default Post;
