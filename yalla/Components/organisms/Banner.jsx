import React from 'react'

export default function Banner() {
  return (
    <div>
      <div className="relative w-[100%] h-[400px] overflow-hidden">
      <video className="w-[100%] h-[100%] object-cover" autoPlay muted loop>
        <source src="/assits/images/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  )
}
