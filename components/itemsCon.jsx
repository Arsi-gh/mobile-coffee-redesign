import React, { Children } from 'react'

export default function ItemsCon({children}) {
  return (
    <div className="max-w-[1600px] flex flex-wrap sm:justify-center gap-4 max-sm:gap-2 px-2 mx-auto my-6">
        {children}
    </div>
  )
}
