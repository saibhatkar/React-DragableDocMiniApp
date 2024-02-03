import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen '>
        <div className='absolute w-full py-10 flex justify-center text-xl font-semibold text-zinc-600  top-[5%]' >Document</div>
        <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900 '>Docs.</h1>
      </div>
    </>
  )
}

export default Background;