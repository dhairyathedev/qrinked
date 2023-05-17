import React, { useEffect } from 'react'
import CreateNav from '../Nav/CreateNav'
import { authStatus } from '@/lib/auth'
import { useRouter } from 'next/router'

interface LayoutProps {
    children: React.ReactNode
  }

export default function CreateDashboard({children}: LayoutProps) {
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
        <CreateNav />
        <main className="m-2 mx-auto max-w-screen-md p-4">{children}</main>
    </div>
  )
}
