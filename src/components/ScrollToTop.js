import React from 'react'

const ScrollToTop = () => {
  return (
    <div className='rounded-full border-2 border-[#37415166] fixed bottom-[20px] right-[20px] bg-[#e7d0ffe2] z-20 p-2'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="24"
        height="24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </div>
  )
}

export default ScrollToTop