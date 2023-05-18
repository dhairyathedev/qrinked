import React from "react"
import Head from "next/head"

import HomePageNav from "../Nav/HomePageNav"

interface LayoutProps {
  children: React.ReactNode
}

export default function HomePageLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>QRInked - Create Beautiful QR Codes</title>
        <meta
          name="description"
          content="Create your own QR codes and boost your ideas or business"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageNav />
      <main className="mx-2 max-w-screen-lg md:mx-auto">{children}</main>
    </>
  )
}
