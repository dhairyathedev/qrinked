import DashboardLayout from '@/components/Layout/DashboardLayout'
import Card from '@/components/ui/Card'
import NoQR from '@/components/util/NoQR'
import { readUser } from '@/lib/auth'
import { fetchUserCreatedLinks } from '@/lib/qr'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [userId, setUserId] = useState("")
  const [qrs, setQRS] = useState([])
  useEffect(() => {
    async function loadUser() {
      const user = await readUser();
      setUserId(user.id)
      console.log(user)
    }
    loadUser()
  }, [])

  useEffect(() => {
    async function FetchQRs() {
      const res = await fetchUserCreatedLinks(userId);
      setQRS(res)
      console.log("User QRs: ", res)
    }
    FetchQRs()
  }, [userId])
  
  return (
    <>
        <DashboardLayout>
            <h1 className="text-2xl font-semibold">My QR Codes</h1>
            <div>
              {qrs.length > 0 ? qrs.map((data) => {
                return(
                  <>
                    <Card key={data.id} name={data.qr_name} type={data.qr_type} slug={data.qr_slug} date={(new Date(data.created_at)).toLocaleDateString()} qrId={data.qr_id}/>
                  </>
                )
              }) : <NoQR />}
            </div>
        </DashboardLayout> 
    </>
  )
}
