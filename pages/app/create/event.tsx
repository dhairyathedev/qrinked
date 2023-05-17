/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { readUser } from "@/lib/auth"
import { supabase } from "@/lib/client"
import createQR, { generateKey } from "@/lib/qr"
import CreateDashboard from "@/components/Layout/CreateDashboard"
import { Button } from "@/components/ui/button"
import Connector from "@/components/ui/connector"
import { Input } from "@/components/ui/input"

export default function CalEvent() {
  const [userId, setUserId] = useState("")
  const [qrName, setQRName] = useState("")
  const [eventName, setEventName] = useState("")
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      const user = await readUser()
      setUserId(user.id)
      console.log(user)
    }
    loadUser()
  }, [])

  useEffect(() => {
    
  })

  async function createWebQR() {
    const slug = await generateKey()
    // const obj = {
    //   qr_name: qrName,
    //   qr_userid: userId,
    //   qr_type: "website",
    //   qr_type_id: 1,
    //   qr_slug: slug,
    //   qr_metadata: {
    //     value: websiteURL,
    //     type: "website",
    //   }
    // }
    // const data = await createQR(obj).then(() => {
    //   router.push(`/app/create/complete?qr_slug=${slug}`)
    // })
  }
  return (
    <>
      <CreateDashboard>
        <h2 className="text-xl font-semibold sm:text-2xl">
          2. Complete the content
        </h2>
        <div className="mt-12">
          <Connector activeItem={2} />
        </div>
        <div className="mt-16">
          {/* <Input type="text" placeholder="Enter the name of QR" /> */}
          <label className="block">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">
              QR Code Name
            </span>
            <input
              type="text"
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="Enter the QR Title"
              value={qrName}
              onChange={(e) => setQRName(e.target.value)}
            />
          </label>
          <label className="mt-10 block">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">
              Event Name
            </span>
            <input
              type="text"
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="ex. Apple Event 2023"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </label>
          <div className="mt-10">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">
              Event Dates
            </span>
            <div className="mt-2 flex items-center">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="start"
                  type="date"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Select date start"
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="end"
                  type="date"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">
              Event Timings
            </span>
            <div className="mt-2 flex items-center">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="start"
                  type="time"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="end"
                  type="time"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Button
            className="mt-8 h-10 w-full bg-primary text-xl font-semibold hover:bg-primary hover:opacity-90"
            onClick={createWebQR}
          >
            Next
          </Button>
        </div>
      </CreateDashboard>
    </>
  )
}
