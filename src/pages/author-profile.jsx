import React from 'react'
import AuthorProfile from '../components/AuthorProfile/AuthorProfile'
import AuthorArticles from '../components/AuthorArticles/AuthorArticles'
import LinkTo from '../components/LinkTo/LinkTo'
import styles from './author-profile.module.css'

const AuthorProfilePage = () => {
  const authorData = {
    authorName: 'Louise Jensen',
    shortBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    longBio: 'Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.',
    profileImageSrc: '/src/img/authors/1.png',
    socialLinks: {
      instagram: 'https://instagram.com/louisejensen',
      twitter: 'https://twitter.com/louisejensen',
      youtube: 'https://youtube.com/louisejensen'
    }
  }

  const articlesData = [
    {
      id: 1,
      title: 'The best art museums',
      image: '/src/img/article-images/1.png',
      date: '16. March 2022',
      readTime: '10 Min'
    },
    {
      id: 2,
      title: 'An indestructible hope',
      image: '/src/img/article-images/2.png',
      date: '16. March 2022',
      readTime: '10 Min'
    },
    {
      id: 3,
      title: 'The chains of our lives',
      image: '/src/img/article-images/3.png',
      date: '16. March 2022',
      readTime: '10 Min'
    },
    {
      id: 4,
      title: 'Keep on smiling',
      image: '/src/img/article-images/4.png',
      date: '16. March 2022',
      readTime: '10 Min'
    }
  ]

  return (
    <div className={styles.authorProfilePage}>
      <div className={styles.container}>
        <div className={styles.navigationGrid}>
          <LinkTo
            title="Go Back"
            link="/"
            direction="left"
            className={styles.goBackButton}
          />
          <h2 className={styles.pageTitle}>Author</h2>
        </div>

        <AuthorProfile {...authorData} />
        <AuthorArticles
          authorName={authorData.authorName}
          articles={articlesData}
        />
      </div>
    </div>
  )
}

export default AuthorProfilePage
