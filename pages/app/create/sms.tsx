import React, { useEffect, useState } from "react"
import CreateDashboard from "@/components/Layout/CreateDashboard"
import Connector from "@/components/ui/connector"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/router"
import { readUser } from "@/lib/auth"
import createQR, { generateKey } from "@/lib/qr"

export default function SMS() {
  const [userId, setUserId] = useState("")
  const [qrName, setQRName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      const user = await readUser();
      setUserId(user.id)
      console.log(user)
    }
    loadUser()
  }, [])

  async function createSMSQR() {
    const slug = await generateKey()
    const obj = {
      qr_name: qrName,
      qr_userid: userId,
      qr_type: "sms",
      qr_type_id: 3,
      qr_slug: slug,
      qr_metadata: {
        value: `smsto:${phoneNumber}:${message}`,
        type: "sms",
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
          <label className="block" >
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">QR Code Name</span>
            <input
              type="text"
              className="mt-2
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
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">Phone Number</span>
            <input
              type="tel"
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="ex. 9347122XXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label className="mt-10 block">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">Message</span>
            <textarea
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="Write a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <Button className="mt-8 h-10 w-full bg-primary text-xl font-semibold hover:bg-primary hover:opacity-90" onClick={createSMSQR}>Next</Button>
        </div>
      </CreateDashboard>
    </>
  )
}
