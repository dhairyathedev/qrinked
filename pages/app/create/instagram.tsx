import React, { useEffect, useState } from "react"

import CreateDashboard from "@/components/Layout/CreateDashboard"
import Connector from "@/components/ui/connector"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { readUser } from "@/lib/auth"
import { supabase } from "@/lib/client"
import createQR, { generateKey } from "@/lib/qr"
import { useRouter } from "next/router"

export default function YouTube() {
  const [userId, setUserId] = useState("") 
  const [qrName, setQRName] = useState("")
  const [websiteURL, setWebsiteURL] = useState("")
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      const user = await readUser();
      setUserId(user.id)
      console.log(user)
    }
    loadUser()
  }, [])

  async function createWebQR() {
    const slug = await generateKey()
    const obj = {
      qr_name: qrName,
      qr_userid: userId,
      qr_type: "instagram",
      qr_type_id: 6,
      qr_slug: slug,
      qr_metadata: {
        value: websiteURL,
        type: "instagram",
      }
    }
    const data = await createQR(obj).then(() => {
      router.push(`/app/create/complete?qr_slug=${slug}`)
    })
  }
  return (
    <>
      <CreateDashboard>
        <h2 className="text-xl font-semibold sm:text-2xl">2. Complete the content</h2>
        <div className="mt-12">
          <Connector activeItem={2} />
        </div>
        <div className="mt-16">
          {/* <Input type="text" placeholder="Enter the name of QR" /> */}
          <label className="block" >
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">QR Code Name</span>
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
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">Instagram URL</span>
            <input
              type="text"
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="ex. https://www.instagram.com/google"
              value={websiteURL}
              onChange={(e) => setWebsiteURL(e.target.value)}
            />
          </label>
          <Link href="/app/create/complete">
          <Button className="mt-8 h-10 w-full bg-primary text-xl font-semibold hover:bg-primary hover:opacity-90" onClick={createWebQR}>Next</Button>
          </Link>
        </div>
      </CreateDashboard>
    </>
  )
}
