import React, { useEffect } from 'react'
import DashboardNav from '../Nav/DashboardNav'
import { authStatus } from '@/lib/auth'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface LayoutProps {
    children: React.ReactNode
  }

export default function DashboardLayout({children}: LayoutProps) {
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      if(!await authStatus()){
        router.push("/login")
      }
    }

    loadUser()
  }, [router])
  return (
    <div className="font-primary">
      <Head>
        <title>QRInked - Create Beautiful QR Codes</title>
        <meta
          name="description"
          content="Create your own QR codes and boost your ideas or business"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DashboardNav />
        <main className="m-2 mx-auto max-w-screen-md p-4">{children}</main>
    </div>
  )
}
