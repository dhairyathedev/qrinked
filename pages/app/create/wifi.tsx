import React, { useEffect, useState } from "react";
import Link from "next/link";
import CreateDashboard from "@/components/Layout/CreateDashboard";
import { Button } from "@/components/ui/button";
import Connector from "@/components/ui/connector";
import { Input } from "@/components/ui/input";
import createQR, { generateKey } from "@/lib/qr"

import { readUser } from "@/lib/auth";
import { useRouter } from "next/router";

export default function Wifi() {
  const [userId, setUserId] = useState("") 
  const [qrName, setQrName] = useState("");
  const [wifiName, setWifiName] = useState("");
  const [password, setPassword] = useState("");
  const [wifiSecurity, setWifiSecurity] = useState("");
  const router = useRouter()
  useEffect(() => {
    async function loadUser() {
      const user = await readUser();
      setUserId(user.id)
      console.log(user)
    }
    loadUser()
  }, [])
  function test(){
    console.log(wifiSecurity)
  }
  async function createWifiQR() {
    const slug = await generateKey()
    const obj = {
      qr_name: qrName,
      qr_userid: userId,
      qr_type: "wifi",
      qr_type_id: 2,
      qr_slug: slug,
      qr_metadata: {
        value: `WIFI:T:${wifiSecurity.length < 0 ? "" : wifiSecurity};S:${wifiName};P:${password};H:false;`,
        type: "wifi",
      }
    }
    const data = await createQR(obj).then(() => {
      router.push(`/app/create/complete?qr_slug=${slug}`)
    })
    console.log(data)
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
              onChange={(e) => setQrName(e.target.value)}
            />
          </label>
          <label className="mt-10 block">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">
              WIFI Name (SSID)
            </span>
            <input
              type="text"
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="John's Iphone"
              value={wifiName}
              onChange={(e) => setWifiName(e.target.value)}
            />
          </label>
          <label className="mt-10 block">
            <span className="text-lg font-semibold text-gray-700 sm:text-xl">
              Password
            </span>
            <input
              type="password"
              className=" mt-2
              block
              w-full
              rounded-md
              border-gray-300
              text-lg shadow-sm focus:border-primary focus:text-blue-700 focus:placeholder:text-blue-700 sm:text-xl"
              placeholder="It's a secret"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="mt-10">
            
<label htmlFor="underline_select" className="sr-only">WIFI Strength</label>
<select id="underline_select" className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setWifiSecurity(e.target.value)}>
    <option value="DEFAULT">Choose a WIFI strength</option>
    <option value="nopass">No Password</option>
    <option value="wep">WEP</option>
    <option value="wpa">WPA</option>
</select>

          </div>
            <Button className="mt-8 h-10 w-full bg-primary text-xl font-semibold hover:bg-primary hover:opacity-90" onClick={createWifiQR}>
              Next
            </Button>
        </div>
      </CreateDashboard>
    </>
  )
}
