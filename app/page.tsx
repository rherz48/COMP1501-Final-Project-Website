"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "motion/react"
import Image from "next/image"
import { Download, ChevronsDown, Grid, Split } from "lucide-react"
import DownloadButton from "@/components/ui/buttons/download-button"
import GridImage from "@/components/ui/image/grid_image"
import TweenGridImage from "@/components/ui/image/tween_grid_image"
import SplitText from "@/components/ui/text/split-text"
import TextLoop from "@/components/ui/text/loop-text"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Page() {

  const listOfWords = ["Climb your way to the top!",
                     "Unleash your inner climber!", 
                     "Jump into the unknown!", 
                     "Get ready to climb!"]
  
  return (
    <div>
      <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4">
        <h1 className="text-center text-6xl font-bold text-blue-500">
          {/* {siteConfig.name} */}
          <SplitText text={siteConfig.name} className="top-text" />
        </h1>

        {/* <h1 className="text-center text-6xl font-bold text-blue-500 top-text">
          Testing
        </h1> */}
        
      </div>

      <div className="px-6 py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold text-primary">
              Download the game now and start climbing!
            </h2>

            <p className="mt-4 max-w-lg text-center text-xl">
              {siteConfig.description}
            </p>
            <DownloadButton/>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold text-primary">
              See the game in action!
            </h2>

            {/* <p className="mt-4 text-center text-xl">Climb your way to the top!</p> */}
            <p className="mt-4 text-center text-xl">
              <TextLoop list={listOfWords} className="text-2xl font-bold text-primary" />
              </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-6 w-full"
            >
              <div className="mx-auto w-full max-w-5xl">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/test_image.png"
                    alt="Gameplay Image 1"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4 pb-10">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          <ChevronsDown size={40} className="animate-pulse drop-shadow-md"/>
        </motion.div>

        <h1 className="text-center text-3xl font-bold text-blue-500">
          See screenshots from the game!
        </h1>

      </div>

      {/* Use array of grid images in TweenGridImage */}
      <TweenGridImage 
        images={[
          { src: "/images/test_image.png", alt: "Gameplay Image 1" },
          { src: "/images/test_image.png", alt: "Gameplay Image 2" },
          { src: "/images/test_image.png", alt: "Gameplay Image 3" },
          { src: "/images/test_image.png", alt: "Gameplay Image 4" },
          { src: "/images/test_image.png", alt: "Gameplay Image 5" },
          { src: "/images/test_image.png", alt: "Gameplay Image 6" },
        ]}
      />


      
    </div>

  )
}