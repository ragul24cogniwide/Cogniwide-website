"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HackathonCarousel({ images, intervalMs = 3000 }: { images: string[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length === 0) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs)
    return () => clearInterval(id)
  }, [images, intervalMs])

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full mt-4 rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px]">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt="Hackathon session"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  )
}