import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, Je suis Baptiste Doucerain, développeur Javascript</p>
        <p>
          Humeur du moment ==> <a href="https://nextjs.org/learn">Next.js ⏭</a>
        </p>
      </section>
      <footer>
        <a href="https://github.com/DBattou" target="_blank" rel="noopener noreferrer">
          Powered by Battou !
          <img src="/images/mario.png" alt="Baptiste Logo" className="logo" />
        </a>
      </footer>
    </Layout>
  )
}
