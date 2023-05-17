import Image from "next/image"
import React from "react"

interface ConnectorData {
  text: String
  subtext?: String
  active: Boolean
  end?: Boolean
}
// ${active ? "text-primary dark:text-blue-500" : "text-gray-400 dark:text-gray-500"}
export default function ConnectorCirle({
  text,
  subtext,
  active,
  end,
}: ConnectorData) {
  return (
    <>
      {end ? (
        <li
          className={`flex items-center font-semibold ${
            active
              ? "text-primary dark:text-blue-500"
              : "text-gray-400 dark:text-gray-500"
          }`}
        >
          <Image src={"/assets/icons/" +  (active ? "active-checkbox.svg" : "disabled-checkbox.svg")} alt="checkbox_tick" width={24} height={24} className="mr-2"/>
          {text}
        </li>
      ) : (
        <li
          className={`flex items-center md:w-full ${
            active
              ? "text-primary dark:text-blue-500"
              : "text-gray-400 dark:text-gray-500"
          } after:border-1 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] xl:after:mx-10`}
        >
          <span
            className={`flex items-center font-semibold after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden`}
          >
            <Image src={"/assets/icons/" +  (active ? "active-checkbox.svg" : "disabled-checkbox.svg")} alt="checkbox_tick" width={24} height={24} className="mr-2"/>
            {text}{" "}
            <span className="hidden sm:ml-1 sm:inline-flex">{subtext}</span>
          </span>
        </li>
      )}
    </>
  )
}
