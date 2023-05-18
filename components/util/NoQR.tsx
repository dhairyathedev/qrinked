import Image from 'next/image'
import React from 'react'

export default function NoQR() {
  return (
    <>
        <div className="mx-auto max-w-screen-sm flex items-center justify-center flex-col mt-20">
        <Image
              src="/assets/images/empty.svg"
              alt="QRInked"
              width={400}
              height={200}
            />
            <h2 className='mt-10 md:text-2xl text-center'>It looks like you do not have any QR Codes Created!</h2>
        </div>
    </>
  )
}
