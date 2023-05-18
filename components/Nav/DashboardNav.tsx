import Image from "next/image"
import Link from "next/link"

export default function DashboardNav() {
  return (
    <nav className="m-2 mx-auto max-w-screen-md p-4">
      <div className="flex items-center justify-between">
        <Link href="/">
        <Image src="/assets/logo.svg" alt="QRInked" width={144} height={144} />
        </Link>
        <Link href="/app/create">
          <button className="flex flex-row items-center space-x-2 rounded-full bg-primary p-2 font-semibold text-white transition-all hover:opacity-80 md:px-8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_115_324)">
                <path
                  d="M31.5 16.5H19.5V4.5H31.5V16.5ZM28.5 7.5H22.5V13.5H28.5V7.5Z"
                  fill="#F4F4F4"
                />
                <path
                  d="M31.5 31.5H19.5V19.5H31.5V31.5ZM28.5 22.5H22.5V28.5H28.5V22.5Z"
                  fill="#F4F4F4"
                />
                <path
                  d="M16.5 4.5V16.5H4.5V4.5H16.5ZM7.5 13.5H13.5V7.5H7.5V13.5Z"
                  fill="#F4F4F4"
                />
                <path d="M4.5 28.5H7.5V31.5H4.5V28.5Z" fill="#F4F4F4" />
                <path d="M13.5 19.5H16.5V22.5H13.5V19.5Z" fill="#F4F4F4" />
                <path d="M10.5 22.5H13.5V25.5H10.5V22.5Z" fill="#F4F4F4" />
                <path d="M13.5 25.5H16.5V28.5H13.5V25.5Z" fill="#F4F4F4" />
                <path d="M10.5 28.5H13.5V31.5H10.5V28.5Z" fill="#F4F4F4" />
                <path d="M7.5 25.5H10.5V28.5H7.5V25.5Z" fill="#F4F4F4" />
                <path d="M7.5 19.5H10.5V22.5H7.5V19.5Z" fill="#F4F4F4" />
                <path d="M4.5 22.5H7.5V25.5H4.5V22.5Z" fill="#F4F4F4" />
              </g>
              <defs>
                <clipPath id="clip0_115_324">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="matrix(-1 0 0 1 36 0)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="hidden md:block">
                Create QR
            </span>
          </button>
        </Link>
      </div>
    </nav>
  )
}
