// import { useParams } from "react-router-dom";
import styles from "./magazinePost.module.css";
import Header from "../components/Header/Header";
import ReturnNavigation from "../components/ReturnNavigation/ReturnNavigation";
import Post from "../components/Post/Post";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import LinkTo from "../components/LinkTo/LinkTo";
import Footer from "@components/Footer/Footer";

import {articles} from "../data/articles.js";

const MagazinePost = () => {
//   const { id } = useParams();
//   const currentArticle = articles.find(item => item.id === Number(id));

  return (
    <>
      <div className={styles.magazinePost + " container"}>

		<div className={styles["magazinePost-header"]}>
          <Header title="" />
        </div>

		<div className={styles["magazinePost-returnNav"]}>
			<ReturnNavigation title="magazin" link="/" />
		</div>

		<div className={styles["magazinePost-post"]}>
        	<Post data={articles[0]} />
		</div>

		<div className={styles["magazinePost-latestPosts"]}>
			<LatestPosts />
		</div>

      </div>
      <Footer />
    </>
  );
};

export default MagazinePost;
