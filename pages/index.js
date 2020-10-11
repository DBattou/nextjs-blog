import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from './index.module.css'
import { getSortedPostsData } from '../lib/posts'
import NextJsLogo from '../components/icons/nextjsLogo'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, Je suis Baptiste Doucerain, développeur Javascript</p>
        <p className={styles.interestContainer}>
          <p className={styles.interest}>{'Humeur du moment ==>'}</p>
          <a href="https://nextjs.org/learn" className={styles.imageContainer}>
            <NextJsLogo className={styles.image}></NextJsLogo>
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <a href="https://github.com/DBattou" target="_blank" rel="noopener noreferrer">
          Powered by DBattou
          <img src="/images/GitHub.png" alt="Baptiste Logo" className="logo" />
        </a>
      </footer>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
