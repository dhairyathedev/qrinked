import React, { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

interface TypeSelectCardDataTypes{
    title: string,
    description: string,
    src: string,
    url: string
}

export default function TypeSelectCard({title, description, src, url}: TypeSelectCardDataTypes) {
    return (
        <Link href={url}>
        <div className="flex w-96 cursor-pointer flex-row items-center space-x-4 rounded-md mx-2 border p-4 hover:shadow-md md:w-80">
            <div className="text-primary">
                <Image src={src} width={42} height={42} alt="Icon" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="text-xs font-semibold text-textSecondary">{description}</p>
            </div>
        </div>
        </Link>
    )
}
