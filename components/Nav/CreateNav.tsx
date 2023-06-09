import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback } from "../ui/avatar"

export default function CreateNav() {
  return (
    <nav className="m-2 mx-auto max-w-screen-md p-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="QRInked"
            width={144}
            height={144}
          />
        </Link>
        <Avatar className="flex items-center justify-center">
          <AvatarFallback className="bg-primary text-xl font-semibold text-white ">
            D
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
