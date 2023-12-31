import React, { forwardRef } from 'react'

const Title = forwardRef(function Title({text , id} , ref) {
  return (
    <div id={id} ref={ref} className='w-5/6 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto my-12 lg:my-24 relative lg:w-1/2'>
      <b className='bg-white p-2 px-4 rounded-lg text-center absolute left-1/2 transform -translate-x-1/2 -bottom-5 text-xl  lg:text-2xl text-neutral-800'>{text}</b>
    </div>
  )
})

export default Title
