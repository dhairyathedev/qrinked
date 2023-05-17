import React, { useEffect } from 'react'
import DashboardNav from '../Nav/DashboardNav'
import { authStatus } from '@/lib/auth'
import { useRouter } from 'next/router'

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
        <DashboardNav />
        <main className="m-2 mx-auto max-w-screen-md p-4">{children}</main>
    </div>
  )
}
