import React, { useState } from "react"

import ConnectorCirle from "./connector-circle"

interface ConnectorActiveState {
  activeItem: Number
}

export default function Connector({ activeItem }) {
  return (
    <>
      <ol className="mt-4 flex w-full items-center justify-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <ConnectorCirle
          text={"QR"}
          active={activeItem === 1}
          subtext={"Type"}
        />
        <ConnectorCirle text={"Content"} active={activeItem === 2} />
        <ConnectorCirle
          text={"Complete"}
          active={activeItem === 3}
          end={true}
        />
      </ol>
      
    </>
  )
}
