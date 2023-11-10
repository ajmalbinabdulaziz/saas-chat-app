import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"


function Logo() {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden'>
        <div className='flex items-center w-72 h-14'>
          <AspectRatio
            ratio={16 / 9}
            className="flex items-center justify-center"
          >
              <Image 
                priority
                src='/next.svg'
                width={100}
                height={100}
                alt="logo"
                className="dakr:filter dark:invert"
              />
          </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo 