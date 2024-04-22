"use client"

import styles from './Header.module.css'
import { SearchBar } from './SearchBar'

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
              Where The Weather At
            </div>
            <SearchBar />
        </div>
    )
  }
  