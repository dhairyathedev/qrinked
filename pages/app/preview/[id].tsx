import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Preview() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <Image
          src="/assets/icons/qr-placeholder.svg"
          alt="QR Placeholder"
          width={350}
          height={350}
        />
      </div>
      <Link className="absolute right-20 top-5" href="/app/dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer hover:text-primary"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10l4 4m0 -4l-4 4"></path>
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
        </svg>
      </Link>
    </>
  )
}
