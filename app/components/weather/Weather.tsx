"use client"

import { Body } from './Body'
import { Header } from './Header'
import styles from "./Weather.module.css"

export const Weather = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Body />
      </div>
    </div>
  )
}
