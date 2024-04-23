import type { ReactNode } from "react"
import { StoreProvider } from "./StoreProvider"
import { Nav } from "./components/Nav"

import "./styles/globals.css"

interface Props {
  readonly children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={'bg-neutral-200 font-sans'}>
            <Nav />
            <main
              className={'pb-5 overflow-y-auto'}
              style={{ height: 'calc(100vh - 56px)' }}
            >
              {children}
            </main>
          </section>
        </body>
      </html>
    </StoreProvider>
  )
}
