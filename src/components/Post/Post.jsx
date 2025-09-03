import { articles } from "../../data/articles"
import PostContent, { PostText, PostQuote } from "@components/Post/postComponents/PostContent";
import PostHeader from "@components/Post/postComponents/PostHeader";

const Post = () => {
  const article = articles.find((item) => item.id === 1);

  if (!article) return <p>Article not found</p>;

  const paragraphs = article.text.split("\n\n");
  const beforeQuote = paragraphs.slice(0, 2);
  const afterQuote = paragraphs.slice(2);

  return (
    <article>
      <PostHeader
        title={article.title}
        desc={article.desc}
        authorName={article.authorName}
        authorPhoto={article.authorPhoto}
        date={article.date}
        timeToRead={article.timeToRead}
        badgeName={article.badgeName}
        badgeLink={article.badgeLink}
      />

      <PostContent
        img={article.img}
        authorName={article.authorName}
        authorPhoto={article.authorPhoto}
        date={article.date}
        timeToRead={article.timeToRead}
      >
        <PostText textArray={beforeQuote} boldFirst />

        {article.quoteText && (
          <PostQuote
            quoteText={article.quoteText}
            quoteAuthor={article.quoteAuthor}
          />
        )}
        <PostText textArray={afterQuote} boldFirst />
      </PostContent>
    </article>
  );
};

export default Post;
