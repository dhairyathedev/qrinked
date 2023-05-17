import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { deleteQR } from "@/lib/qr"

export default function Card({slug, type, name, date, qrId}) {
  const router = useRouter()

  async function handleDelete() {
    const res = await deleteQR(qrId)
    console.log(res)
    if(res){
      window.location.reload()
    }
  }
  return (
    <>
      <div className="mt-10 flex items-center justify-between rounded-md border p-4">
        <div className="flex flex-row items-center space-x-4">
          <Image
            src="/assets/icons/qr-placeholder.svg"
            alt="QR Placeholder"
            className="cursor-pointer duration-300 hover:scale-110"
            width={60}
            height={60}
            onClick={() => router.push(`/app/create/complete?qr_slug=${slug}`)}
          />
          <div>
            <h4 className="text-xs font-semibold uppercase text-primary">{type}</h4>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-600">Created: {date}</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-red-700"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7h16"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            <path d="M10 12l4 4m0 -4l-4 4"></path>
          </svg>
          </button>
          {/* <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-primary"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 11l5 5l5 -5"></path>
            <path d="M12 4l0 12"></path>
          </svg>
          </button> */}
        </div>

      </div>
    </>
  )
}
