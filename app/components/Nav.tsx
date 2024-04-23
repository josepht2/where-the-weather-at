"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const ACTIVE_STYLE = 'underline underline-offset-4'
const INACTIVE_STYLE = 'hover:underline underline-offset-4'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <div className='flex items-center h-14 bg-white border-b border-slate-200 space-x-4'>
      <div className='ml-5 text-2xl font-bold'>
        Where The Weather At
      </div>
      <Link
        className={pathname === '/' ? ACTIVE_STYLE : INACTIVE_STYLE}
        href="/"
      >
        Home
      </Link>
      <Link
        className={pathname === '/search-history' ? ACTIVE_STYLE : INACTIVE_STYLE}
        href="/search-history"
      >
        Search History
      </Link>
    </div>
  )
}
