import Head from 'next/head'
import React from 'react'
import styles from './cssgrid.module.css'

export default function CssGridLayout() {
  return (
    <>
      <Head>
        <title>Responsive Layout using CSS Grid</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/milk-box.svg" alt="milk-box" />
            <p>Milk</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/coffee.svg" alt="coffee" />
            <p>Coffee</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/wine.svg" alt="wine" />
            <p>Wine</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/martini.svg" alt="martini" />
            <p>Martini</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/latte-macchiato.svg" alt="latte macchiato" />
            <p>Latte Macchiato</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/infusion.svg" alt="tea" />
            <p>Tea</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src="css-grid/beer.svg" alt="beer" />
            <p>Beer</p>
          </div>
        </div>
      </div>
    </>
  )
}
