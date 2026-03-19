import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='relative'>
      <section className="header_banner relative">
        <Image src="/aboutHero.png" alt="About us" width={1920} height={1080} className='w-full h-full object-cover' />

        <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-10 pb-6 min-[992px]:px-15 px-10 max-[576px]:px-6'>
          <div className='container max-w-full'>
          <h1 className="text-white min-[1700px]:w-[1300px] min-[1700px]:text-9xl min-[1400px]:text-8xl text-5xl min-[992px]:text-7xl font-['Michroma'] min-[1400px]:leading-[140px] min-[992px]:leading-[85px] leading-[60px] min-[992px]:w-[760px] min-[1400px]:w-[1000px] ">Not Your Typical Agency</h1>

          <div className='flex items-center justify-between min-[1600px]:mt-[60px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
          <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">A modern digital agency built for the next generation of businesses. SKYNETECH blends creative design, advanced development, and strategic thinking to create digital experiences that engage users, strengthen brands, and drive real business growth. We build high-performance websites, applications, and digital products that help startups and businesses launch, scale, and succeed in the digital world.</p>

          <Image src="/startProject.svg" alt="project" width={100} height={100} className='w-auto h-auto cursor-pointer' />
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page