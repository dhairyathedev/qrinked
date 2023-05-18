import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { authStatus } from "@/lib/auth"
import CreateNav from "../Nav/CreateNav"
import { Button } from "../ui/button"

interface LayoutProps {
  children: React.ReactNode
}

export default function CreateDashboard({ children }: LayoutProps) {
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      if (!(await authStatus())) {
        router.push("/login")
      }
    }

    loadUser()
  }, [router])
  return (
    <div className="font-primary">
      <CreateNav />
      <main className="m-2 mx-auto max-w-screen-md p-4">
        {children}
        <Link href="/app/dashboard">
          <Button
            variant="subtle"
            className="mt-14 rounded-full bg-bgSecondary px-4 font-semibold text-textPrimary hover:bg-bgSecondary"
          >
            Back to Dashboard
          </Button>
        </Link>
      </main>
    </div>
  )
}
