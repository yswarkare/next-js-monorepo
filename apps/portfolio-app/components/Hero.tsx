import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase rotate-center tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Web Magic with Next.JS</h2>
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless User Experience' />
          <p className="text-center md:tracking-wider mb-4 tex-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Yogesh, a Next.JS Developer based in Maharashtra, India.
          </p>

          <a href="#about" className="hover:animatecss hover:slideInLeft">
            <MagicButton title="Show My Work" icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero