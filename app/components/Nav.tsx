"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// import styles from "../styles/layout.module.css"

export const Nav = () => {
  const pathname = usePathname()

  return (
    <div className='flex font-sans'>
      <div className='text-lg font-bold'>
        Where The Weather At
      </div>
      <Link
        // className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      {/* <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link> */}
    </div>
  )
}
