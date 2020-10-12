import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from './index.module.css'
import { getSortedPostsData } from '../lib/posts'
import NextJsLogo from '../components/icons/nextjsLogo'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, Je suis Baptiste Doucerain, développeur web</p>
        <p className={styles.interestContainer}>
          <p className={styles.interest}>{'Voici un blog créé grâce à'}</p>
          <a href="https://nextjs.org/learn" className={styles.imageContainer}>
            <NextJsLogo className={styles.image}></NextJsLogo>
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Mini Jeux</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a href="https://georges-tictactoe.herokuapp.com">Tic Tac Toe</a>
            <br />
            <a href="https://github.com/DBattou/TicTacToe">
              <small className={utilStyles.lightText}>Lien Github</small>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a>Motorcycle</a>
            <br />
            <a href="https://github.com/DBattou/motorcycle">
              <small className={utilStyles.lightText}>Lien Github</small>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a>Snake</a>
            <br />
            <a href="https://github.com/DBattou/snake">
              <small className={utilStyles.lightText}>Lien Github</small>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a>Moonlander</a>
            <br />
            <a href="https://github.com/DBattou/moonLander">
              <small className={utilStyles.lightText}>Lien Github</small>
            </a>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <a href="https://github.com/DBattou" target="_blank" rel="noopener noreferrer">
          Powered by DBattou
          <img src="/images/GitHub.png" alt="Github Logo" className="logo" />
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
