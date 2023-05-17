import React from "react"

import CreateDashboard from "@/components/Layout/CreateDashboard"
import TypeSelectCard from "@/components/ui/TypeSelectCard"
import Connector from "@/components/ui/connector"

export default function Create() {
  return (
    <>
      <CreateDashboard>
        <h2 className="text-xl font-semibold sm:text-2xl">1. Select QR Code Type</h2>
        <div className="mt-12">
          <Connector activeItem={1} />
        </div>
        <div className="mt-8 grid grid-rows-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-2">
          <TypeSelectCard title="Website" src="/assets/icons/globe.svg" description="Open a URL in the web browser" url="/app/create/web"/>
          <TypeSelectCard title="WIFI" src="/assets/icons/wifi.svg" description="Share the wifi network using QR Scan" url="/app/create/wifi"/>
          <TypeSelectCard title="SMS" src="/assets/icons/sms.svg" description="Send SMS easily with a QR Scan" url="/app/create/sms"/>
          <TypeSelectCard title="Call" src="/assets/icons/call.svg" description="Share phone numbers easily with a QR Scan" url="/app/create/call"/>
          <TypeSelectCard title="YouTube" src="/assets/icons/yt.svg" description="Share the youtube video using QR" url="/app/create/youtube"/>
          {/* <TypeSelectCard title="Event" src="/assets/icons/event.svg" description="Share the youtube video using QR" url="/app/create/event"/> */}
          <TypeSelectCard title="Instagram" src="/assets/icons/instagram.svg" description="Share instagram profile and posts using QR" url="/app/create/instagram"/>
          <TypeSelectCard title="Whatsapp" src="/assets/icons/wa.svg" description="Share Whatsapp QR code for chat" url="/app/create/wa"/>
        </div>
      </CreateDashboard>
    </>
  )
}
