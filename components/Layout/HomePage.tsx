import React from 'react'
import HomePageNav from '../Nav/HomePageNav'


interface LayoutProps{
    children: React.ReactNode
}

export default function HomePageLayout({children}: LayoutProps) {
  return (
    <>
        <HomePageNav />
        <main className="mx-2 max-w-screen-lg md:mx-auto">
            {children}
        </main>
    </>
  )
}
